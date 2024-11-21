"use client"
import Link from "next/link";
import CardProduct from "../CardProduct";
import { Button } from "../ui/button";
import { createClient } from "@/utils/supabase/client";
import { convertToArray } from "@/utils/utils";
import { useEffect, useState } from "react";
import { Product } from "@/utils/supabase/products";
import Loader from "../Loader/Loader";
import { getProductsByLimit } from "../../utils/supabase/products";

export default  function Inventory() {
  const [ data, setData ] = useState<Product[]>([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const products = await getProductsByLimit(3)
        if (products) {
          setData(products)
        }

      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  },[])
  return (
    <section>
      <div className=" max-w-[1000px] mx-auto p-6 grid place-items-center place-content-center grid-cols-1 md:grid-cols-3 gap-4">
        {/* Only show 3 result from db select */}
        {
          loading
            ? (
              <div className="col-span-3">
                <Loader message="Loading Products" />
              </div>
            )
            : (
              data?.map((product) => (
                <Link key={product.id} href={`/detail/${product.id}`}>
                  <CardProduct 
                    imageUrl={convertToArray(product.image_urls)}
                    title={`${product.make} ${product.model} ${product.year}`}
                    price={product.price}
                  />
                </Link>
              ))
            )
        }
    </div>
    <div className="flex items-center justify-center">
      <Button className="bg-red-700 hover:bg-red-500 text-white" asChild>
        <Link href={"/inventory"}>
          Inventory
        </Link>
      </Button>
    </div>
    </section>
  )
}