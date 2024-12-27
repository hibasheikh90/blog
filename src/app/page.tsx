import React from "react";
import Image from "next/image";
import Mega from "@/components/mega";
import ContactPage from "@/components/contact";

export default function Home() {
  return (
    <div>
      <div 
        className="relative flex items-center justify-center bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/h2.webp')" }}
      >
        <div className="text-center px-6 py-8 relative z-10 max-w-4xl w-full">
          <h2 className="text-4xl sm:text-6xl font-serif font-bold">Welcome To</h2>
          <p className="text-5xl sm:text-7xl font-bold font-serif mt-4">BlogBox</p>
          <p className="text-xl sm:text-2xl mt-4">Explore cutting-edge AI trends, breakthroughs,</p>
          <p className="text-xl sm:text-2xl">and how they’re shaping the future of technology and society.</p>
        </div>
      </div>
      <Mega />
    </div>
  );
}
