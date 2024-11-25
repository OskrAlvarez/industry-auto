"use client"
import Loader from "@/components/Loader/Loader";
import { Card, CardContent } from "@/components/ui/card";
import { getProduct, Product } from "@/utils/supabase/products";
import { formatPrice } from "@/utils/utils";
import Image, { StaticImageData } from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import initialImageState from '@/public/images/loading-image.png'
import { FullscreenGallery } from "../FullScreenGalery";
import ProductTable from "../ProductTable";



export default function ProductDetail () {
  const [product, setProduct] = useState<Product[]>([])
  const [productImages, setProductImages] = useState<string[]>([])
  const [mainImage, setMainImage] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const openFullscreen = (index: number) => {
    setMainImage(index)
    setIsFullscreen(true)
  }

  const closeFullscreen = () => {
    setIsFullscreen(false)
    console.log('Hii')
  }

  const [loading, setLoading] = useState(false)
  const { id } = useParams()
  const paramId = Number(id)
  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true) 
      try {
        if (paramId) {
          const productFind = await getProduct(paramId)
          if (productFind) {
            setProduct(productFind)
              const imgArr = JSON.parse(productFind[0].image_urls)
              setProductImages(imgArr)
          }
        }
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    fetchProduct()
  },[id])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="overflow-hidden rounded-lg">
            {
              loading 
                ? (<Loader message="loading main image..." />)
                : (
                  <button
                    onClick={() => openFullscreen(mainImage)}
                    className="overflow-hidden rounded-lg"
                  >
                  <Image 
                    src={productImages[mainImage] || initialImageState}
                    alt="Main product image"
                    className="w-full h-96 object-contain"
                    width={600}
                    height={600}
                  />
                </button>
                )
            }
          </div>
          <div className="grid grid-cols-3 gap-2 max-w-[280px] md:grid-cols-5 md:max-w-md md:mx-0">
            {productImages.map((thumb, index) => (
              <button
                key={index}
                onClick={() => setMainImage(index)}
                className="aspect-square w-20 overflow-hidden rounded-md bg-gray-100"
              >
                <Image
                  src={thumb}
                  alt={`Product thumbnail ${index + 1}`}
                  className="h-full w-full object-cover"
                  width={600}
                  height={600}
                />
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <h1 className="text-lg text-center font-bold">
              {loading ? ('Cargando datos...') : (
                `${product[0]?.make} ${product[0]?.model} ${product[0]?.year}`
              )}          
            </h1>
            <p className="text-lg text-center font-bold">  
              {loading ? ('Cargando datos...') : (
              formatPrice(product[0]?.price)
              )}
            </p>
          </div>
          <div className="text-lg font-bold text-center">
          <ProductTable product={product[0]}/>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Description</h2>
        <Card>
          <CardContent className="pt-6">
            <p>
             {product[0]?.description}
            </p>
           
          </CardContent>
        </Card>
      </div>
      {isFullscreen && (
        <FullscreenGallery
          images={productImages}
          currentIndex={mainImage}
          onClose={closeFullscreen}
          onChangeImage={setMainImage}
        />)
      }
    </div>
  )
}