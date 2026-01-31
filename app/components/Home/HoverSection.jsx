"use client";
import React from "react";
import { motion } from "framer-motion";
import { anton } from "../../lib/fonts";

const HoverSection = () => {
  // Instagram URLs
  const instagramPosts = [
    "https://www.instagram.com/p/DUA7qAdCeWx/embed",
    "https://www.instagram.com/p/DUDfN6BiWhS/embed",
    "https://www.instagram.com/p/DTscAtjiT8y/embed",
    "https://www.instagram.com/p/DT8byhdkhZm/embed",
    "https://www.instagram.com/p/DTu_47piEA5/embed",
    "https://www.instagram.com/p/DTnPsE6CfKq/embed",
    "https://www.instagram.com/p/DT2t63IiaiA/embed",
  ];

  return (
    <>
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`${anton.className} text-5xl md:text-6xl font-bold flex justify-center`}
      >
        GRAINLY
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`${anton.className} flex justify-center items-center text-[60px] md:text-[130px] color-text leading-none`}
      >
        Social Media
      </motion.p>

      {/* Scrollable / Flex container */}
      <div className="flex items-center justify-center max-w-7xl mx-auto my-8 px-3">
        <div
          className="
            flex gap-2 h-[420px] md:h-[480px]
            w-full md:w-[1200px]
            overflow-x-auto md:overflow-hidden
            snap-x snap-mandatory
            bg-gray-200 rounded
            px-2 md:px-0
          "
        >
          {instagramPosts.map((url, idx) => (
            <div
              key={idx}
              className="
                relative h-full overflow-hidden cursor-pointer rounded
                border border-black
                flex items-center justify-center
                transition-all duration-500
                flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-1
                hover:flex-[4]
                snap-center
                group
              "
            >
              <div className="w-full h-full flex items-center justify-center">
                <iframe
                  src={url}
                  className="w-[300px] h-[380px] md:w-[320px] md:h-[400px]"
                  frameBorder="0"
                  scrolling="no"
               
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HoverSection;
