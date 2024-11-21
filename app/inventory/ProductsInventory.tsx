"use client"
import CardProduct from "@/components/CardProduct"
import Loader from "@/components/Loader/Loader"
import { Product } from "@/utils/supabase/products"
import { convertToArray } from "@/utils/utils"
import Link from "next/link"
import { useState } from "react"
import { PaginationComponent } from "./Pagination"

interface Props {
  data: Product[]
}
export function ProductsInventory({ data }: Props) {
   // Estados para items de la Paginación
   const [productsPerPage, setProductsPerPage] = useState(10);
   const [currentPage, setCurrentPage] = useState(1);
   const totalProducts = data.length;

  // Obtenemos first and last index
  const lastIndex = currentPage * productsPerPage;
  const firstIndex = lastIndex - productsPerPage;

  return (
    <section className="max-w-[1000px] mx-auto">
      <h1 className="text-2xl py-4">Inventory: </h1>
      <div className="grid grid-cols-3 place-items-center gap-5 p-8">
      {
        data?.length === 0 
        ? (
          <div className="col-span-3">
            <Loader message="Loading Products" />
          </div>
        )
        : (data.map(product => (
          <Link 
            key={`${product.make}-${product.id}`} 
            href={`/detail/${product.id}`}
          >
            <CardProduct 
              imageUrl={convertToArray(product.image_urls)} 
              title={`${product.make} ${product.model} ${product.year}`}
              price={product.price}
            />
          </Link>
        )).slice(firstIndex, lastIndex)
      )
      }
    </div>
    <PaginationComponent 
      itemsPerPage={productsPerPage}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      totalItems={totalProducts}
    />
    </section>
  )
}