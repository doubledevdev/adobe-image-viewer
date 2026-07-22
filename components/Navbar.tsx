"use client";

import Image from "next/image";



export default function Navbar() {

  return (
    <nav className="w-full bg-red-500 text-white shadow-md">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Image src="/adobe.png" width={50} height={50} alt="hello"/>
        <span className="text-lg font-semibold tracking-wide">ADOBE Online Service</span>

      </div>

    </nav>
  );
}
