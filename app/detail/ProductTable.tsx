import { Gauge, Bolt, Cog, Fuel, Barcode, Stamp } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Product } from '@/utils/supabase/products'
import { formatNumber } from '@/utils/utils'

interface Props {
  product: Product
} 

export default function ProductTable({ product }: Props) {
  const specs = [
    { 
      icon: <Gauge className="w-5 h-5" />, 
      label: "Odometer", 
      value: `${formatNumber(Number(product?.odometer))} Miles` 
    },
    {
      icon: <Bolt className="w-5 h-5" />,
      label: "Engine",
      value: product?.engine,
    },
    {
      icon: <Stamp />,
      label: "Transmission",
      value: product?.transmission,
    },
    { 
      icon: <Cog className="w-5 h-5" />, 
      label: "Drivetrain", 
      value: product?.drivetrain 
    },
    { 
      icon: <Fuel className="w-5 h-5" />, 
      label: "Fuel", 
      value: product?.fuel 
    },
    {
      icon: <Barcode className="w-5 h-5" />,
      label: "VIN",
      value: product?.VNI,
    },
  ]

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardContent className="p-4">
        {specs.map((spec, index) => (
          <div key={index} className="flex items-center py-3 border-b last:border-b-0">
            <div className="w-8 h-8 mr-4 flex items-center justify-center text-muted-foreground">
              {spec.icon}
            </div>
            <div>
              <div className="text-sm font-medium text-left">{spec.label}</div>
              <div className="text-sm text-muted-foreground text-left">{spec.value}</div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}