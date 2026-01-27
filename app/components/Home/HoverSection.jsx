"use client";
import React from "react";
import Image from "next/image";
import salted from "../../../public/Images/salted.webp";
import { motion } from "framer-motion";
import { anton } from "../../lib/fonts";

const HoverSection = () => {
  return (
    <>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`${anton.className} text-5xl md:text-6xl font-bold flex justify-center `}
      >
        GRAINLY
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`${anton.className} flex justify-center text-[100px] md:text-[130px] color-text leading-none`}
      >
        Social Media
      </motion.p>
      <div className="flex items-center justify-center max-w-7xl mx-auto my-20 px-6">
        <div className="flex gap-1 p-2 w-[1200px] h-[550px] rounded">
          {/* CARD 1 — IMAGE */}
          <div
            className="relative flex-1 h-full overflow-hidden cursor-pointer rounded 
                     border border-[#000000] 
                     flex items-center justify-center 
                     transition-all duration-500 hover:flex-[4] group"
          >
            {/* Image */}
            <Image
              src={salted}
              alt="Salted"
              fill
              className="object-cover transition-all duration-500
                       scale-105"
            />

            {/* Overlay Text */}
            <span
              className="relative z-10 min-w-[19em] p-6 text-center uppercase tracking-widest 
                       text-black  rounded
                       transform -rotate-90 transition-all duration-500
                       group-hover:rotate-0 "
            >
              Salted
            </span>
          </div>
          <div
            className="relative flex-1 h-full overflow-hidden cursor-pointer rounded 
                     border border-[#000000] 
                     flex items-center justify-center 
                     transition-all duration-500 hover:flex-[4] group"
          >
            {/* Image */}
            <Image
              src={salted}
              alt="Salted"
              fill
              className="object-cover transition-all duration-500
                       scale-105"
            />

            {/* Overlay Text */}
            <span
              className="relative z-10 min-w-[19em] p-6 text-center uppercase tracking-widest 
                       text-black  rounded
                       transform -rotate-90 transition-all duration-500
                       group-hover:rotate-0 "
            >
              Salted
            </span>
          </div>

          {/* CARD 2 */}
          <HoverCard text="Hover Me" />

          {/* CARD 3 */}
          <HoverCard text="Hover Me" />

          {/* CARD 4 */}
          <HoverCard text="Hover Me" />

          {/* CARD 5 */}
          <HoverCard text="Hover Me" />

          {/* CARD 6 */}
          <HoverCard text="Hover Me" />
        </div>
      </div>
    </>
  );
};

/* REUSABLE CARD */
const HoverCard = ({ text }) => (
  <div
    className="flex-1 h-full overflow-hidden cursor-pointer rounded 
               border border-[#ec7931] bg-[#212121]
               flex items-center justify-center 
               transition-all duration-500 hover:flex-[4] group"
  >
    <span
      className="min-w-[14em] p-2 text-center uppercase tracking-widest text-[#ec7931]
                 transform -rotate-90 transition-all duration-500
                 group-hover:rotate-0"
    >
      {text}
    </span>
  </div>
);

export default HoverSection;
