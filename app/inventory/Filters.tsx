"use client";

import CardProduct from "@/components/CardProduct";
import Loader from "@/components/Loader/Loader";
import { Badge } from "@/components/ui/badge";
import { getProductsByFilters, Product } from "@/utils/supabase/products";
import { convertToArray } from "@/utils/utils";
import { Slash } from "lucide-react";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";

interface Props {
  searchParams: {
    make: string | null;
    model: string | null;
    minPrice: string | null;
    maxPrice: string | null;
  };
}

export function Filters({ searchParams }: Props) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchFilteredUsers = async () => {
      try {
        const data = await getProductsByFilters({
          make: String(searchParams.make) || "",
          model: String(searchParams.model) || "",
          minPrice: searchParams.minPrice
            ? Number(searchParams.minPrice)
            : undefined,
          maxPrice: searchParams.maxPrice
            ? Number(searchParams.maxPrice)
            : undefined,
        });
        if (data) {
          setProducts(data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchFilteredUsers();
  }, [searchParams]);
  return (
    <Suspense fallback={<Loader message="Loading Products..." />}>
      <section className="max-w-[1000px] mx-auto">
        <div className="p-6">
          <div className="flex items-center gap-2">
            {searchParams.make && (
              <>
                <Badge variant={"destructive"}>{searchParams.make}</Badge>
              </>
            )}
            {searchParams.model && (
              <>
                <Slash className="w-4 h-4" />
                <Badge variant={"destructive"}>{searchParams.model}</Badge>
              </>
            )}
            {searchParams.minPrice && (
              <>
                <Slash className="w-4 h-4" />
                <Badge variant={"destructive"}>{searchParams.minPrice}</Badge>
              </>
            )}
            {searchParams.maxPrice && (
              <>
                <Slash className="w-4 h-4" />
                <Badge variant={"destructive"}>{searchParams.maxPrice}</Badge>
              </>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-5 p-8">
          {products.length === 0 ? (
            <h3>There's no results for your search!</h3>
          ) : (
            products.map((product, index) => (
              <Link key={`${product.id}-${index}`} href={`/detail/${product.id}`}>
                <CardProduct
                  imageUrl={convertToArray(product.image_urls)}
                  title={`${product.make} ${product.model} ${product.year}`}
                  price={product.price}
                />
              </Link>
            ))
          )}
        </div>
      </section>
    </Suspense>
  );
}
