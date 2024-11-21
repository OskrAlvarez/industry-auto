import { Slider } from "@/components/sections/Slider";
import { Info } from '@/components/sections/Info/Info'
import { GoogleMaps } from "@/components/sections/GoogleMaps";
import { Schedule } from "@/components/sections/Schedule";
import { Footer } from "@/components/sections/Footer";
import Inventory from "@/components/sections/Inventory";

export default async function Index() {
  return (
    <>
      <main>
        <Slider />
        <Inventory />
        <Info />
        <GoogleMaps />
        <Schedule />
        <Footer /> 
      </main>
    </>
  );
}
