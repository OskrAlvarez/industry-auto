"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";

import { useEffect, useRef, useState } from "react";
import { convertBlobUrlToFile } from "@/lib/convertToFile";
import { deleteImageFromStorage, uploadImage } from "@/utils/supabase/storage";
import {
  insertProduct,
  Product,
  updateProduct,
} from "@/utils/supabase/products";
import { createClient } from "@/utils/supabase/client";
import { CustomInputFile } from "@/app/dashboard/new/FormImputs/CustomInputFile";
import { CustomMakeSelect } from "@/app/dashboard/new/FormImputs/CustomMakeSelect";
import { CustomInput } from "@/app/dashboard/new/FormImputs/CustomInput";
import { CustomTextArea } from "@/app/dashboard/new/FormImputs/CustomTextArea";
import {
  FormProductData,
  productSchema,
} from "@/app/dashboard/FormSchema/FormSchema";
import { toast } from "sonner";
import { convertToArray } from "@/utils/utils";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface FormProductToEdit {
  carProduct?: Product[];
}

export function FormProduct({ carProduct }: FormProductToEdit) {
  const imageInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [redirectToDashboard, setRedirectToDashboard] = useState(false);
  const router = useRouter();
  const initialImagesState = carProduct
    ? convertToArray(carProduct[0]?.image_urls)
    : [];
  const [imageUrls, setImageUrls] = useState<string[]>(initialImagesState);
  const [userId, setUserId] = useState("");

  const {
    handleSubmit,
    reset,
    setValue,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FormProductData>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      price: carProduct ? String(carProduct[0]?.price) : "",
      year: carProduct ? String(carProduct[0]?.year) : "",
      description: carProduct ? String(carProduct[0]?.description) : "",
      odometer: carProduct ? String(carProduct[0]?.odometer) : "",
      engine: carProduct ? String(carProduct[0]?.engine) : "",
      transmission: carProduct ? String(carProduct[0]?.transmission) : "",
      drivetrain: carProduct ? String(carProduct[0]?.drivetrain) : "",
      fuel: carProduct ? String(carProduct[0]?.fuel) : "",
      VNI: carProduct ? String(carProduct[0]?.VNI) : "",
      make: carProduct ? carProduct[0]?.make : "",
      model: carProduct ? carProduct[0]?.model : "",
      version: carProduct ? String(carProduct[0]?.version) : "No Version Provided",
    },
  });

  const getUserId = async () => {
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    const user_id = user?.id;
    if (user_id) {
      setUserId(user_id);
    }
  };

  useEffect(() => {
    getUserId();
  }, [userId]);

  const uploadImages = async (imageUrls: string[]) => {
    let urls: Array<string> = [];
    for (const url of imageUrls) {
      const imageFile = await convertBlobUrlToFile(url);
      const { imageUrl, error } = await uploadImage({
        file: imageFile,
        bucket: "product_bucket",
        folder: "images",
      });
      if (error) {
        console.log(error);
        return;
      }
      urls.push(imageUrl);
    }
    return urls;
  };

  const onSubmit: SubmitHandler<FormProductData> = async (data) => {
    if (carProduct) {
      console.log("Edit Mode");
      try {
        // Obtener URLs originales desde el producto existente y asegurar que sea un array
        const originalUrls: string[] = carProduct[0]?.image_urls
          ? Array.isArray(carProduct[0].image_urls)
            ? carProduct[0].image_urls
            : JSON.parse(carProduct[0].image_urls)
          : [];
        // Determinar imágenes a eliminar
        const imagesToDelete = originalUrls.filter(
          (url) => !imageUrls.includes(url)
        );
        let newUrls: string[] = [];

        if (imagesToDelete.length > 0) {
          await Promise.all(
            imagesToDelete.map(async (image) => {
              await deleteImageFromStorage(image);
              console.log("Deleted image:", image);
            })
          );
        }
        // Subir nuevas imágenes
        const newImages = imageUrls.filter((url) => url.startsWith("blob:"));
        for (const url of newImages) {
          const imageFile = await convertBlobUrlToFile(url);
          const { imageUrl, error } = await uploadImage({
            file: imageFile,
            bucket: "product_bucket",
            folder: "images",
          });
          if (error) {
            console.log(error);
            return;
          }
          newUrls.push(imageUrl);
        } // Combinar URLs existentes y nuevas sin duplicados
        const remainingUrls = originalUrls.filter(
          (url) => !imagesToDelete.includes(url)
        );
        const uniqueUrls = [...new Set([...remainingUrls, ...newUrls])];
        setImageUrls(uniqueUrls);
        // Crear el objeto de datos actualizado
        const dataToUpdate = {
          ...data,
          year: Number(data.year),
          price: Number(data.price),
          odometer: Number(data.odometer),
          user_id: userId,
          image_urls: uniqueUrls,
        }; // Llamar a la función de actualización de producto
        const carProd = await updateProduct(
          Number(carProduct[0].id),
          dataToUpdate
        );
        // Asegúrate de tener la función updateProduct implementada
        if (carProd) {
          toast.success("Product Updated successfully");
          setRedirectToDashboard(true); // Establece la redirección
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log("Create Mode");
      try {
        const urls = await uploadImages(imageUrls);
        if (urls) {
          setImageUrls([]);
          const product = {
            ...data,
            year: Number(data.year),
            price: Number(data.price),
            odometer: Number(data.odometer),
            image_urls: urls,
            user_id: userId,
          };
          await insertProduct(product);
          reset();
          toast.success("Product Created Successfully");
          setRedirectToDashboard(true); // Establece la redirección
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  // Redirecciona fuera de los bloques try/catch
  useEffect(() => {
    if (redirectToDashboard) {
      router.push("/dashboard");
    }
  }, [redirectToDashboard, router]);
  return (
    <div className="flex justify-center items-center pt-20 max-w-[768px] mx-auto">
      <Button className="self-start" variant={"outline"} asChild>
        <Link href={"/dashboard"}>
          <ArrowLeft />
          Go Back
        </Link>
      </Button>
      <form
        ref={formRef}
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5 w-full"
      >
        <CustomInputFile
          ref={imageInputRef}
          imageUrls={imageUrls}
          setImageUrls={setImageUrls}
        />
        <CustomMakeSelect control={control} name="make" error={errors.make} label="Select a Make" />
        <CustomInput 
          label="Version"
          type="text"
          control={control}
          name="version"
          placeholder="Version: Sport Cartier #324 master classic"
          error={errors.version}
        />
        <div className="flex gap-3 items-center justify-between">
          <CustomInput
            label="Price"
            type="text"
            control={control}
            name="price"
            placeholder="Price: 10000"
            error={errors.price}
          />
          <CustomInput
            label="year"
            type="text"
            control={control}
            name="year"
            placeholder="Year: 2024..."
            error={errors.year}
          />
        </div>
        <div className="flex gap-3 items-center justify-between">
          <CustomInput
            label="Odometer"
            type="text"
            control={control}
            name="odometer"
            placeholder="Odometer: 158000..."
            error={errors.odometer}
          />
          <CustomInput
            label="Engine"
            type="text"
            control={control}
            name="engine"
            placeholder="Engine: 4cyl 2.0T..."
            error={errors.engine}
          />
        </div>
        <div className="flex gap-3 items-center justify-between">
          <CustomInput
            label="Transmission"
            type="text"
            control={control}
            name="transmission"
            placeholder="Transmission: Automatic 8-Speed..."
            error={errors.transmission}
          />
          <CustomInput
            label="DriveTrain"
            type="text"
            control={control}
            name="drivetrain"
            placeholder="DriveTrain: RWD..."
            error={errors.drivetrain}
          />
        </div>
        <div className="flex gap-3 items-center justify-between">
          <CustomInput
            label="Fuel"
            type="text"
            control={control}
            name="fuel"
            placeholder="Fuel: Gasoline..."
            error={errors.fuel}
          />
          <CustomInput
            label="VNI"
            type="text"
            control={control}
            name="VNI"
            placeholder="VNI: 1GKS1JKJ2FR720572..."
            error={errors.VNI}
          />
        </div>
        <CustomTextArea
          label="Description"
          control={control}
          name="description"
          placeholder="Description..."
          error={errors.description}
        />
        <Button variant={"outline"} disabled={isSubmitting}>
          {isSubmitting ? "Creating Product" : "Submit Product"}
        </Button>
      </form>
    </div>
  );
}
