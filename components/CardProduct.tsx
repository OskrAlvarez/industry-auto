import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { formatPrice } from "@/utils/utils";
import Image, { StaticImageData } from "next/image"

interface Props {
  imageUrl: string | never[],
  title: string;
  price: number;
}

export default function CardProduct({ imageUrl, title, price }: Props) {
  const images = [... imageUrl]
  return (
    <Card className="w-full max-w-sm overflow-hidden">
      <div>
        <Image 
          src={images[0]}
          alt={`Image Product`}
          width={300}
          height={300}
          className="object-cover" 
        />
      </div>
      <CardHeader className="flex justify-between items-center">
        <h2 className="text-xl font-bold">{title}</h2>
        <span className="text-xl font-semibold text-primary">{formatPrice(price)}</span>
      </CardHeader>
      
    </Card>
  )
}