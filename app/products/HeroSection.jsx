"use client";

import Image from "next/image";
import { anton } from "../lib/fonts";
export default function HeroSection({ scrollToProducts }) {
  const handleShopNow = () => {
    scrollToProducts?.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* HEADING */}
      <h1
        className={`${anton.className} flex justify-center  color-text text-[70px] sm:text-[60px] md:text-[150px]`}
      >
        GRAINLY-CREAM OF RICE
      </h1>

      {/* BUTTON */}
      <div className="flex justify-end px-10">
        <button className="button-2 cursor-pointer" onClick={handleShopNow}>
          BUY NOW
        </button>
      </div>

      {/* HERO BACKGROUND */}
      <div className="relative w-full h-[400px] rounded-2xl overflow-visible">
        {/* Background Image */}
        <Image
          src="/bg.webp"
          alt="Hero background"
          fill
          priority
          className="object-cover rounded-2xl"
        />

        {/* MAN IMAGE */}
        <Image
          src="/man.png"
          alt="Man"
          width={520}
          height={520}
          priority
          className="
            absolute
            bottom-0
            left-1/2
            -translate-x-1/2
            w-[350px]
            md:w-[450px]
            lg:w-[520px]
            object-contain
          "
        />
      </div>
    </>
  );
}
