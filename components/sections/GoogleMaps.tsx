import OfficePicture from "@/public/images/bg-office.jpeg";
import Image from "next/image";
export function GoogleMaps() {
  return (
    <div className="p-6 md:px-0">
     <div className="flex flex-col items-center text-lg pt-3 max-w-xl mx-auto mb-3">
      <p className="font-light border border-slate-400 mb-2 p-2 rounded-lg pt-3">
      <strong className="text-red-700 font-bold">Parking Lot: </strong> 
      6108 Memorial Dr, Stone Mountain, GA 30083
      </p>
        <p className="text-center font-light text-lg p-2 border border-slate-400 rounded-lg">
        <strong className="text-red-700 font-bold">HeadQuarter: </strong> 
          6428 Dawson Blvd Ste 1224, Norcross, GA 30093 <span>470-998-0313</span>
        </p>
     </div>
      <section className="max-w-[1000px] mx-auto flex flex-col md:flex-row gap-5 justify-between items-center">
        <div>
          <Image
            className="object-cover rounded-md shadow-md"
            src={OfficePicture}
            alt="Office Picture"
            width={400}
            height={450}
          />
        </div>
        <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.214734589509!2d-84.22060682398121!3d33.90987252523399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5a7bae1bfba1b%3A0xca6603a28fc269ad!2sIndustry%20Auto%20LLC!5e0!3m2!1ses!2sve!4v1732029850839!5m2!1ses!2sve" width="450" height="300" className="w-[300px] md:w-[450px]"></iframe>
        </div>
      </section>
    </div>
  );
}
