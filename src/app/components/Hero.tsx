import Image from "next/image";
import React from "react";
export default function Hero() {
  return (
    <div className="w-full flex bg-black-200">
      <div className="relative w-full h-[700px]">
        <Image alt="Bg" src="/end.jpg" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b to-blue-200/50 from-blue-600/50 items-center justify-center flex">
          <div className="text-white text-8xl">
            <p>Arknights Endfield</p>
          </div>
        </div>
      </div>
    </div>
  );
}
