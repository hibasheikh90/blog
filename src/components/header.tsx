import Link from "next/link";
import React from "react";
import { Menu } from "lucide-react"; // Importing Menu icon
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  return (
    <div className="flex justify-between bg-blue-950 items-center px-9 py-6 border-b-4">
      {/* Logo */}
      <h1 className="font-serif text-white text-3xl hover:underline">
        BlogBox
      </h1>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex justify-between items-center text-white gap-4 font-serif text-2xl">
        <li className="hover:underline">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:underline">
          <Link href="/mega">Blog</Link>
        </li>
        <li className="hover:underline">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>

      {/* Mobile Navigation */}
      <Sheet>
        <SheetTrigger className="md:hidden p-2">
          <Menu size={24} className="text-white" /> {/* Corrected Menu color */}
        </SheetTrigger>
        <SheetContent side="right" className="bg-blue-950 text-white p-6">
          <ul className="flex flex-col gap-6">
            <li className="hover:underline">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:underline">
              <Link href="/mega">Blog</Link>
            </li>
            <li className="hover:underline">
              <Link href="/contact">Contact</Link> {/* Corrected Link */}
            </li>
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Header; 