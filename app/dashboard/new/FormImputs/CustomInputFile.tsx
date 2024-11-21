"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ChangeEvent, Dispatch, RefObject, SetStateAction, useRef, useState } from "react";
import { InfoIcon } from "lucide-react";
import { Label } from "@/components/ui/label";

interface Props {
  imageUrls: string[];
  setImageUrls:Dispatch<SetStateAction<string[]>>;
  ref: RefObject<HTMLInputElement>
}

export function CustomInputFile({imageUrls, setImageUrls, ref}: Props) {
  const [urls, setUrls] = useState<string[] | never>([]);
  const deleteImage = (index: number) => {
    const updateArr = imageUrls.filter((img, indexImg) => indexImg !== index);
    setImageUrls(updateArr);
  };
  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files);
      const newImageUrls = filesArray.map((file) => URL.createObjectURL(file));
      setImageUrls([...imageUrls, ...newImageUrls]);
    }
  };
  return (
    <>
      <div className="grid grid-cols-3 gap-3 pb-5 pl-3">
        {imageUrls?.map((image, index) => (
          <div key={image} className="relative">
            <Button
              className="absolute right-0 top-0 w-4 h-4"
              variant={"destructive"}
              key={index}
              onClick={() => deleteImage(index)}
            >
              X
            </Button>
            <Image
              key={image}
              src={image}
              alt={`image-${index}`}
              width={150}
              height={150}
            />
          </div>
        ))}
      </div>
      <div className="form-group flex items-center gap-3">
        <Input
          type="file"
          multiple
          className="cursor-pointer hidden"
          ref={ref}
          onChange={handleImageChange}
        />
        {imageUrls.length < 10 ? (
          <>
            <Label>Select the Images</Label>
            <Button
              variant={"outline"}
              onClick={() => ref.current?.click()}
              >
              Upload Images
            </Button>
          </>
        ) : (
          <>
            <div className="bg-red-400 rounded-sm flex gap-3 items-center p-3">
              <InfoIcon className="text-white" />
              <p className="text-white font-bold">
                You can't upload more images
              </p>
            </div>
          </>
        )}
      </div>
        {imageUrls.length === 0 
          ? (
          <span className="text-red-600 text-sm py-2">
            You have to upload atleast 1 image
          </span>)
          : ''
        }
    </>
  );
}
