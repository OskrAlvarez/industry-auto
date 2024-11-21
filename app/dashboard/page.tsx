"use client";
import { createClient } from "@/utils/supabase/client";
import { redirect } from "next/navigation";
import { DataTable } from "./products/data-table";
import { getColumns, Product } from "./products/column";
import { useEffect, useState } from "react";
import {
  deleteProduct,
  getProduct,
  getProducts,
} from "@/utils/supabase/products";
import { deleteImageFromStorage } from "@/utils/supabase/storage";
import { toast } from "sonner";
import Loader from "@/components/Loader/Loader";
export default function ProtectedPage() {
  const [data, setData] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const products = await getProducts();
      if (products) {
        setData(products);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  const isUserExist = async () => {
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return redirect("/sign-in");
    }
  };

  useEffect(() => {
    isUserExist();
  }, []);

  const onDelete = async (product: Product) => {
    try {
      toast.info("Deleting the product...");
      const findProduct = await getProduct(product.id);
      if (findProduct) {
        const productToDelete = findProduct[0];
        if (typeof product.image_urls === "string") {
          const imagesToDelete = JSON.parse(product.image_urls);
          for (const image of imagesToDelete) {
            await deleteImageFromStorage(image);
          }
        }
        await deleteProduct(productToDelete.id);
        toast.success("Product Deleted successfully");
        await fetchProducts();
      }
    } catch (error) {
      console.error("Error deleting the product");
    }
  };
  const onEdit = (product: Product) => {
    redirect(`/dashboard/edit/${product.id}`);
  };
  const columns = getColumns({ onEdit, onDelete });

  return (
    <div className="flex-1 w-full flex flex-col gap-12">
      <div className="w-full">
        <div className="container mx-auto py-10">
          {isLoading ? (
            <Loader message="Loading products..." />
          ) : (
            <DataTable columns={columns} data={data} />
          )}
        </div>
      </div>
    </div>
  );
}
