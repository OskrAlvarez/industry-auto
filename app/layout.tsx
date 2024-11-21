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

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Industry Auto",
  description: "The site where you find the best car in the sector.",
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
          <div className="fixed right-4 bottom-4">
            <WhatsAppButton phoneNumber="+14709980313"/>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
