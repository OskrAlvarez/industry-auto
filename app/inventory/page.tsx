"use client";

import { useSearchParams } from "next/navigation";
import { Filters } from "./Filters";
import { ProductsInventory } from "./ProductsInventory";
import { useEffect, useState } from "react";
import { getProducts, Product } from "@/utils/supabase/products";

export default function Inventory() {
  const params = useSearchParams();
  const [products, setProducts] = useState<Product[]>([])

  const searchParams = {
    make: params.get("make"),
    model: params.get("model"),
    minPrice: params.get("minPrice"),
    maxPrice: params.get("maxPrice"),
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProducts()
        if (data) {
          setProducts(data)
        }
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  },[])
  const hasQueryParams = params.toString() !== ''
  return (
    <>
    {hasQueryParams 
      ? <Filters searchParams={searchParams} /> 
      : <ProductsInventory data={products} />
    }
    </>
  );
}
