"use client";

import Image from "next/image";
import bgImage from "@/public/assets/image/main-cap.png";

export default function Hero() {
  return (
    <div className="w-full h-[450px] md:h-[500px] lg:h-[600px]">
      {/* Background Image */}
      <Image
        src={bgImage}
        alt="Sale Banner"
        fill
        className="object-cover brightness-60"
      />

      <div className="absolute inset-0 mt-12 flex flex-col items-center justify-center text-white text-center px-5">
        <h1 className="text-3xl md:text-5xl font-bold tracking-wide">
          HUGE SALE ON NOW
        </h1>
        <p className="text-lg md:text-2xl mt-3 font-semibold">
          UP TO 50% OFF ALL PRODUCTS
        </p>

        <div className="w-32 h-[3px] bg-red-600 mt-5"></div>
      </div>
    </div>
  );
}
