"use client";

import { motion } from "framer-motion";
import { anton } from "../../lib/fonts";
export default function LetterMarquee() {
  const words = [
    "GRAINLY",
    "PURE ENERGY",
    "HEALTHY FOOD",
    "CLEAN FUEL",
    "INSTANT POWER",
  ];

  return (
    <div className={`${anton.className} overflow-hidden whitespace-nowrap py-5  bg-white mt-10`}>
      <motion.div
        className="flex gap-16"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* Repeat words twice for seamless loop */}
        {[...words, ...words].map((word, i) => (
          <span
            key={i}
            className={`text-6xl font-extrabold ${
              i % 2 === 0 ? "text-black" : "color-text"
            }`}
          >
            {word}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
