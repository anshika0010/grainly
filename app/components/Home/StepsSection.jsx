"use client";

import { motion } from "framer-motion";
import { anton } from "../../lib/fonts";

const StepsSection = () => {
  const leftMotion = {
    initial: { x: -150, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const rightMotion = {
    initial: { x: 150, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  return (
    <div className="w-full">
      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`${anton.className} text-3xl md:text-5xl flex justify-center font-extrabold tracking-wide`}
      >
        COOKING
      </motion.h2>

      <motion.h3
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`${anton.className} text-5xl md:text-[100px] flex justify-center font-extrabold text-gray-400 leading-none`}
      >
        INSTRUCTIONS
      </motion.h3>

      {/* SUB TEXT */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className={`${anton.className} text-center max-w-xl mx-auto text-lg md:text-2xl mt-3 color-text`}
      >
        Your Delicious Meal, Ready In 60 sec.
      </motion.p>

      {/* STEPS */}
      <div className="container-2 mx-auto mt-10 flex flex-col md:flex-row items-center justify-center gap-10">
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-10 w-full max-w-[400px]">
          {/* STEP 01 */}
          <motion.div className="flex justify-center" {...leftMotion}>
            <StepCard
              number="01"
              title="Measure Your Grainly"
              text="Use the included 35g scoop to measure your Grainly Cream of Rice into a bowl. This ensures the perfect portion every time."
              border="border-orange-300"
              numberColor="text-orange-400"
              titleColor="text-orange-500"
            />
          </motion.div>

          {/* STEP 03 */}
          <motion.div className="flex justify-center" {...leftMotion}>
            <StepCard
              number="03"
              title="Make It Your Own"
              text="Add your favorite toppings (fruits, nuts, protein powder, or nut butter) to make it your own."
              border="border-purple-300"
              numberColor="text-purple-400"
              titleColor="text-purple-500"
            />
          </motion.div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-10 w-full max-w-[400px]">
          {/* STEP 02 */}
          <motion.div className="flex justify-center" {...rightMotion}>
            <StepCard
              number="02"
              title="Add Liquid"
              text="Add hot (not boiling) water or milk and stir thoroughly to avoid lumps. Keep stirring until smooth and creamy."
              border="border-red-300"
              numberColor="text-red-700"
              titleColor="text-red-800"
            />
          </motion.div>

          {/* STEP 04 */}
          <motion.div className="flex justify-center" {...rightMotion}>
            <StepCard
              number="04"
              title="Ready To Eat"
              text="Stir for 10–15 seconds and let it sit for 1 minute. Grainly thickens naturally into a creamy texture."
              border="border-green-800"
              numberColor="text-green-800"
              titleColor="text-green-800"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

/* STEP CARD COMPONENT */
const StepCard = ({ number, title, text, border, numberColor, titleColor }) => (
  <div className="relative rotate-[14deg]">
    {/* Pin */}
    <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10">
      <div className="w-6 h-6 bg-red-500 rounded-full shadow-lg"></div>
      <div className="w-3 h-3 bg-red-600 rounded-full absolute top-1.5 left-1.5"></div>
    </div>

    <div className="w-[320px] bg-white rounded-2xl shadow-xl px-2 py-10">
      <div className={`bg-orange-50 rounded-xl p-4 border ${border}`}>
        <h2 className={`${anton.className} ${numberColor} text-4xl font-bold`}>
          {number}
        </h2>
        <h3 className={`${anton.className} ${titleColor} font-semibold mt-1`}>
          {title}
        </h3>
        <p className="text-gray-600 text-sm mt-2 leading-relaxed">{text}</p>
      </div>
    </div>
  </div>
);

export default StepsSection;
