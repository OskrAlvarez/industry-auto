"use client";
import { Filters } from "./Filters";
import { ProductsInventory } from "./ProductsInventory";
import { Suspense, useEffect, useState } from "react";
import { getProducts, Product } from "@/utils/supabase/products";
import Loader from "@/components/Loader/Loader";

export default function Inventory() {
  let params = new URLSearchParams(document.location.search);
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
    <Suspense fallback={<Loader message="Loading Products..."/>}>
      {hasQueryParams 
        ? <Filters searchParams={searchParams} /> 
        : <ProductsInventory data={products} />
      }
    </Suspense>
  );
}
