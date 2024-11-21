"use client";
import { Filters } from "./Filters";
import { ProductsInventory } from "./ProductsInventory";
import { Suspense, useEffect, useState } from "react";
import { getProducts, Product } from "@/utils/supabase/products";
import Loader from "@/components/Loader/Loader";

export default function Inventory() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchParams, setSearchParams] = useState({
    make: '',
    model: '',
    minPrice: '',
    maxPrice: ''
  });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This effect will only run on the client
    setIsClient(true);

    const fetchData = async () => {
      try {
        const data = await getProducts();
        if (data) {
          setProducts(data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (isClient) {
      const params = new URLSearchParams(window.location.search);
      setSearchParams({
        make: params.get("make") || '',
        model: params.get("model") || '',
        minPrice: params.get("minPrice") || '',
        maxPrice: params.get("maxPrice") || ''
      });
    }
  }, [isClient]);

  const hasQueryParams = searchParams.make || searchParams.model || searchParams.minPrice || searchParams.maxPrice;

  return (
    <Suspense fallback={<Loader message="Loading Products..."/>}>
      {hasQueryParams
        ? <Filters searchParams={searchParams} />
        : <ProductsInventory data={products} />
      }
    </Suspense>
  );
}
