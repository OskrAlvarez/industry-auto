import { Mail } from "lucide-react";
import { FaceBookIcon, InstagramIcon } from "../ui/icons";
import Link from "next/link";

export function Footer () {
  return (

    <footer className='relative flex items-end justify-center bg-hero bg-no-repeat bg-cover p-10'>
      <div className="absolute w-full inset-0 h-full bg-blue-700/70"></div>
      <div className="relative z-40">
        <p className="text-white text-sm font-normal italic text-center">
        Industry Auto LLC 6428 Dawson Blvd Ste 1224, Norcross, GA 30093 <br />
        6108 Memorial Dr, Stone Mountain, GA 30083
        </p>
        <div className="social-links flex flex-col items-center md:flex-row  gap-3 mt-4">
          <div className="flex items-center gap-2 text-white">
            <Mail />
            <span>industryautollc@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 text-white">
            <FaceBookIcon  />
            <Link 
              href={"https://www.facebook.com/profile.php?id=61552040243476&mibextid=ZbWKwL"}
              target="_blank"
              rel="noopener noreferrer"
            >
            Industry Auto LLC
            </Link>
          </div>
          <div className="flex items-center gap-2 text-white">
            <InstagramIcon />
            <Link 
              href={"https://www.instagram.com/autoindustryllc?igsh=aGQ0bGE1cDByNHRn"}
              target="_blank"
              rel="noopener noreferrer"
            >
              @autoindustryllc
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}