"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";

import Logo from "@/public/images/industry-auto-logo.png";

type NavItems = {
  id: number;
  label: string;
  route: string;
};

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems: Array<NavItems> = [
    { id: 1, label: "Home", route: "/" },
    { id: 2, label: "About", route: "/about" },
    { id: 3, label: "Inventory", route: "/inventory" },
    { id: 4, label: "Dashboard", route: "/dashboard" },
  ];

  return (
    <nav className="border-foreground">
      <div className="flex gap-4 flex-row-reverse md:flex-row items-center justify-between relative">
        <Link href={"/"}>
          <Image src={Logo} alt="Industry Auto Logo" width={100} height={100} />
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList className="flex gap-3">
            {navItems.map((nav) => (
              <NavigationMenuItem key={nav.id}>
                <Link
                  href={nav.route}
                  className="text-foreground hover:text-red-700 hover:font-bold"
                >
                  {nav.label}
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          className="block md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </Button>

        {/* Mobile Navigation */}
        <div
          className={`${
            isOpen ? "h-[190px]" : "h-0"
          } absolute left-0 right-0 top-full overflow-hidden h-0 transition-all duration-500 md:hidden ${
            isOpen && "h-auto"
          }`}
        >
          <div className="px-4 py-2 space-y-1 bg-white dark:bg-black relative z-30 rounded-md">
            {navItems.map((nav) => (
              <Link
                key={nav.id}
                href={nav.route}
                className="block text-center w-full px-3 py-2 text-foreground hover:text-red-700 hover:font-bold"
                onClick={() => setIsOpen((prevState) => !prevState)}
              >
                {nav.label}
              </Link>
            ))}
          </div>
        </div>
        
      </div>
    </nav>
  );
}
