"use client"

import Image from "next/image";

import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import Slider1 from "@/public/images/slider-1.webp";
import Slider2 from "@/public/images/slider-2.webp";
import Slider3 from "@/public/images/slider-3.webp";
import Slider4 from "@/public/images/slider-4.webp";

export const SliderItems = [
  {
    id: 1,
    alt: 'Slider Image 1',
    image: Slider1
  },
  {
    id: 2,
    alt: 'Slider Image 2',
    image: Slider2
  },
  {
    id: 3,
    alt: 'Slider Image 3',
    image: Slider3
  },
  {
    id: 4,
    alt: 'Slider Image 4',
    image: Slider4
  }
]

export function Slider() {
  return (
    <>
      <Swiper
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwipper"
      >
        {SliderItems.map((slider) => (
          <SwiperSlide key={slider.id}>
            <Image
              className="w-full h-[400px] object-cover"
              src={slider.image}
              alt={slider.alt}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}