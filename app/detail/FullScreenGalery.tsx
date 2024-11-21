"use client"
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export function FullscreenGallery({ images, currentIndex, onClose, onChangeImage }: any) {
  const goToNext = () => onChangeImage((currentIndex + 1) % images.length)
  const goToPrevious = () => onChangeImage((currentIndex - 1 + images.length) % images.length)

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
      <div className="w-full h-full flex flex-col items-center justify-center relative">
        <img
          src={images[currentIndex]}
          alt={`Fullscreen view ${currentIndex + 1}`}
          className="max-h-[80vh] max-w-[80vw] object-contain"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 text-white"
          onClick={goToPrevious}
        >
          <ChevronLeft className="h-6 w-6" />
          <span className="sr-only">Previous image</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 text-white"
          onClick={goToNext}
        >
          <ChevronRight className="h-6 w-6" />
          <span className="sr-only">Next image</span>
        </Button>
        <div className="flex mt-4 space-x-2">
          {images.map((image: any, index: number) => (
            <button
              key={index}
              onClick={() => onChangeImage(index)}
              className={`w-16 h-16 border-2 ${
                index === currentIndex ? 'border-primary' : 'border-gray-300'
              }`}
            >
              <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
        <Button
          className="absolute top-4 right-4 mt-4 text-white "
          onClick={() => onClose()}
        >
          <X className="w-6 h-6 text-white" />
        </Button>
      </div>
    </div>
  )
}