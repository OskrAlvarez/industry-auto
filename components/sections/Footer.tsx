import { Mail } from "lucide-react";
import { FaceBookIcon, InstagramIcon } from "../ui/icons";

export function Footer () {
  return (

    <footer className='relative flex items-end justify-center bg-hero bg-no-repeat bg-cover p-10'>
      <div className="absolute w-full inset-0 h-full bg-blue-700/70"></div>
      <div className="relative z-40">
        <p className="text-white text-sm font-normal italic text-center">
        Industry Auto LLC 6428 Dawson Blvd Ste 1224, Norcross, GA 30093
        </p>
        <div className="social-links flex flex-col items-center md:flex-row  gap-3 mt-4">
          <div className="flex items-center gap-2 text-white">
            <Mail />
            <span>industryautollc@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 text-white">
            <FaceBookIcon  />
            <span>Industry Auto LLC</span>
          </div>
          <div className="flex items-center gap-2 text-white">
            <InstagramIcon />
            <span>@autoindustryllc</span>
          </div>
        </div>
      </div>
    </footer>
  )
}