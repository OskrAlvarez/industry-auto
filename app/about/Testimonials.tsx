import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from 'lucide-react'

interface Testimonial {
  avatar: string
  testimonial: string
  username: string
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      testimonial: "I'm delighted with my new car! Industry Auto helped me find the perfect vehicle at an incredible price. Highly recommended!",
      username: "Ana García"
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      testimonial: "I was looking for a reliable used car and I found it at Industry Auto. The purchase process was very simple and the sales team was very friendly. Thank you!",
      username: "Carlos Pérez"
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/62.jpg",
      testimonial: "I needed a car urgently and Industry Auto solved my problem. They have a great variety of vehicles and helped me choose the one that best suited my needs.",
      username: "Sofía López"
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/22.jpg",
      testimonial: "What I liked most about Industry Auto was the transparency throughout the process. They explained all the features of the car and there were no surprises at the time of purchase.",
      username: "Juan Martínez"
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/56.jpg",
      testimonial: "I highly recommend Industry Auto. They have excellent after-sales service and are always willing to help.",
      username: "María Rodríguez"
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/76.jpg",
      testimonial: "Industry Auto is the best used car dealership I've ever known! They have a great variety of vehicles and the financing process was very simple.",
      username: "David Sánchez"
    }
  ]

  return (
    <section className="w-full py-12 bg-background text-foreground">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl md:text-3xl">
              What Our Clients Say
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Discover why our clients trust Industry Auto to find their ideal vehicle
            </p>
          </div>
        </div>
        <div className="mx-auto grid gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial: Testimonial, index: number) => (
            <Card key={index} className="relative overflow-hidden">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-gray-300 mb-4" />
                <p className="text-sm leading-loose text-gray-500 mb-4">{testimonial.testimonial}</p>
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={`Avatar of ${testimonial.username}`} />
                    <AvatarFallback>{testimonial.username.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium leading-none">
                      {testimonial.username}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}