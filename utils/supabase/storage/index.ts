import { createClient } from "../client";
import { v4 as uuidv4 } from "uuid";
import imageCompression from "browser-image-compression";

function getStorage() {
  const { storage } = createClient();
  return storage;
}

type UploadProps = {
  file: File;
  bucket: string;
  folder?: string;
};
export const uploadImage = async ({ file, bucket, folder }: UploadProps) => {
  const fileName = file.name;
  const fileExtension = fileName.slice(fileName.lastIndexOf(".") + 1);
  const path = `${folder ? folder + "/" : ""}${uuidv4()}.${fileExtension}`;

  try {
    file = await imageCompression(file, {
      maxSizeMB: 1,
    });
  } catch (error) {
    console.error(error);
    return { imageUrl: "", error: "Image compression failed" };
  }

  const storage = getStorage();

  const { data, error } = await storage.from(bucket).upload(path, file);

  if (error) {
    return { imageUrl: "", error: "Image upload failed" };
  }

  const imageUrl = `${process.env
    .NEXT_PUBLIC_SUPABASE_URL!}/storage/v1/object/public/${bucket}/${
    data?.path
  }`;

  return { imageUrl, error: "" };
};

export const deleteImageFromStorage = async (imageUrl: string) => { 
  if (!imageUrl.includes("/storage/v1/object/public/")) { 
    console.error("Invalid imageUrl format", imageUrl); 
    return { data: null, error: "Invalid imageUrl format" }; 
  } 
  const bucketAndPathString = imageUrl.split("/storage/v1/object/public/")[1]; 
  const firstSlashIndex = bucketAndPathString.indexOf("/"); 
  if (firstSlashIndex === -1) { 
    console.error("Invalid path in imageUrl", imageUrl); 
    return { data: null, error: "Invalid path in imageUrl" }; 
  } 
  const bucket = bucketAndPathString.slice(0, firstSlashIndex); 
  const path = bucketAndPathString.slice(firstSlashIndex + 1); 
  const storage = getStorage(); 
  const { data, error } = await storage.from(bucket).remove([path]); 
  return { data, error }; 
};