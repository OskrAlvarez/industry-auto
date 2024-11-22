import HeaderAuth from "@/components/header-auth";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "next-themes";
import "./globals.css";

import { NavBar } from "@/components/sections/NavBar";
import { Toaster } from "sonner";
import WhatsAppButton from "@/components/WhatsAppButton";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

const productionUrl = "https://www.industryautollc.com"
export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Industry Auto",
  description: "The site where you find the best car in the sector.",
  keywords: 'Car, Auto, Sales, Atlanta, Industry, Used',
  openGraph: { 
    title: "Industry Auto", 
    description: "The site where you find the best car in the sector.", 
    url: productionUrl, 
    images: [{ 
      url: `${productionUrl}/public/images/industry-auto-logo.png`, 
      width: 800, 
      height: 600, 
      alt: "Imagen de Industry Auto", 
    },],}, 
    twitter: { 
      title: "Industry Auto", 
      description: "The site where you find the best car in the sector.", 
      image: `${productionUrl}/public/images/industry-auto-logo.png`, 
      card: "summary_large_image", 
    },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen flex flex-col items-center">
            <div className="flex-1 w-full flex flex-col">
              <div className="px-8 md:px-6 h-20 flex items-center justify-between relative">
                <NavBar />
                <HeaderAuth />
              </div>
              <div className="flex flex-col">
                <Toaster richColors />
                {children}
              </div>
            </div>
          </main>
          <div className="fixed right-6 bottom-6 md:right-4 md:bottom-4">
            <WhatsAppButton phoneNumber="+14709980313"/>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
