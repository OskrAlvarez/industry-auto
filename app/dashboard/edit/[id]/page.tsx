"use client";

import { FormProduct } from "@/components/FormProduct";
import { getProduct, Product } from "@/utils/supabase/products";
import { convertToArray } from "@/utils/utils";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function UpdateProduct() {
  const { id } = useParams();
  const productId = Number(id);
  const [carProduct, setCarProduct] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productFind = await getProduct(productId);
        if (productFind) {
          const carProductImg = productFind[0].image_urls;
          const imgArr = convertToArray(carProductImg);
          const product = { ...productFind[0], image_url: imgArr };
          setCarProduct([product]);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchProduct();
  }, []);
  return (
    <>{carProduct.length > 0 && <FormProduct carProduct={carProduct} />}</>
  );
}
