"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export const heroSlides = [
  {
    mainTitle: "BANANA",
    subTitle: "BREAD",
    image: "/Images/bananabread.webp",
    titleColor: "#6b3223", // default brown
    barColor: "#6b3223",
  },
  {
    mainTitle: "SALTED",
    subTitle: "CARAMEL",
    image: "/Images/salted.webp",
    titleColor: "#C77A1D", // caramel color
    barColor: "#C77A1D",
  },
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const slide = heroSlides[index];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroSlides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="max-w-9xl mx-auto bg-white overflow-hidden relative py-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* ================= SAME UI START ================= */}

          <section className="w-full bg-white px-4 sm:px-6 relative overflow-hidden">
            <div className="max-w-full mx-auto relative">
              <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
                <div>
                  <div className="flex items-start">
                    <h1
                      className="block text-[70px] sm:text-[120px] md:text-[150px] anton-regular leading-[0.85] font-extrabold tracking-tight uppercase"
                      style={{ color: slide.titleColor }}
                    >
                      {slide.mainTitle}
                    </h1>

                    <div>
                      <div
                        className="h-5 sm:h-7 md:h-12 w-[180px] sm:w-[350px] md:w-[500px] -m-2 sm:-m-5"
                        style={{ backgroundColor: slide.barColor }}
                      />
                      <p className="mt-3 md:mt-5 anton-regular text-base sm:text-xl md:text-3xl px-6 sm:px-16 md:px-24">
                        GRAINLY - CREAM OF RICE
                      </p>
                    </div>
                  </div>

                  <motion.p
                    initial={{ opacity: 0, x: -80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-[50px] sm:text-[90px] md:text-[130px] mt-3 anton-regular leading-[0.85] font-extrabold tracking-tight uppercase"
                    style={{ color: slide.titleColor }}
                  >
                    {slide.subTitle}
                  </motion.p>
                </div>

                <div className="text-right max-w-[300px]  lg:w-auto">
                  <motion.h2
                    initial={{ opacity: 0, x: 200 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="text-[60px] sm:text-[90px] md:text-[100px] leading-[0.9] anton-regular font-extrabold tracking-tight uppercase "
                    style={{ color: slide.titleColor }}
                  >
                    FLAVOUR
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, x: 200 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="text-[#f9a73e] anton-regular text-xs sm:text-sm md:text-md mt-1 tracking-wide max-w-[260px] sm:max-w-[290px] ml-auto uppercase"
                  >
                    Cream Of Rice. A Clean Carbohydrate Based Powdered Meal
                  </motion.p>

                  <Link href="/products">
                    <button className="btn sm:m-1">Shop Now</button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* ================= SECOND SECTION ================= */}

          <section className="relative container mx-auto py-10 px-4 sm:px-6 bg-cover bg-center">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="md:w-[400px] text-black">
                <h3 className="font-extrabold anton-regular text-6xl text-gray-400">
                  GRAINLY
                  <span className="block text-2xl text-gray-900">
                    CREAM OF RICE
                  </span>
                </h3>

                <p className="text-gray-500 mt-2 anton-regular">
                  A Premium and Easy Digesting Carbohydrate Source Created For
                  Everyday Energy and Athlete Performance.
                </p>

                <div
                  className="mt-4 text-white w-[130px] h-[150px] flex flex-col justify-center items-center bg-cover"
                  style={{ backgroundImage: "url('/Images/bg60.webp')" }}
                >
                  <span className="text-4xl anton-regular">60</span>
                  <span className="text-sm anton-regular">SERVINGS</span>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="w-full flex justify-center md:w-[800px] relative"
              >
                <Image
                  src={slide.image}
                  alt="Product Image"
                  priority
                  width={700}
                  height={700}
                  className="w-[300px] sm:w-[700px] md:w-[700px] relative md:absolute md:right-[-45px] md:-translate-y-[400px]"
                />
              </motion.div>
            </div>
          </section>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
