import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Target, Telescope } from "lucide-react"

export default function AboutSection() {
  return (
    <section className="py-16 px-4 md:px-8 bg-background text-foreground">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold sm:text-5xl">About Industry Auto</h2>
          <p className="max-w-3xl mx-auto text-lg">
            Born from a passion for cars and the need for a reliable used car market, Industry Auto emerged in 2013 to offer a safe and transparent alternative in the purchase of used vehicles, putting the customer at the center of everything.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader className="flex flex-row items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-2xl font-semibold text-primary">Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="">
                To be the trusted used car dealership, offering a wide variety of quality vehicles at competitive prices, providing a transparent and satisfactory buying experience to each customer.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Telescope className="w-6 h-6" />
              </div>
              <CardTitle className="text-2xl font-semibold">Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="">
                To become the benchmark in buying and selling used cars in our region, offering personalized mobility solutions and ensuring maximum customer satisfaction through exceptional service.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}