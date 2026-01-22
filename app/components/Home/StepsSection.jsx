"use client";

import { motion } from "framer-motion";
import { anton } from "../../lib/fonts";
const StepsSection = () => {
  return (
    <div className="w-full">
      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`${anton.className} text-3xl md:text-5xl flex justify-center font-extrabold  tracking-wide`}
      >
        COOKING
      </motion.h2>

      <motion.h3
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`${anton.className} text-5xl md:text-[100px] flex justify-center font-extrabold text-gray-400  leading-none`}
      >
        INSTRUCTIONS
      </motion.h3>

      {/* SUB TEXT */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className={`${anton.className} text-center max-w-xl mx-auto text-lg md:text-2xl  mt-3 color-text`}
      >
        Your Delicious Meal, Ready In 60 sec.
      </motion.p>

      {/* STEP SECTION */}
      <div className="container-2 mx-auto mt-10 flex flex-col md:flex-row items-center justify-center gap-8">
        {/* LEFT SIDE */}
        <div className="flex flex-col gap-6 w-full max-w-[400px]">
          {/* STEP 01 */}
          <div className="flex items-center justify-center">
            <div className="relative rotate-[14deg]">
              {/* Pin */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10">
                <div className="w-6 h-6 bg-red-500 rounded-full shadow-lg"></div>
                <div className="w-3 h-3 bg-red-600 rounded-full absolute top-1.5 left-1.5"></div>
              </div>

              <div className="w-[320px] bg-white rounded-2xl shadow-xl px-2 py-10">
                <div className="bg-orange-50 rounded-xl p-4 border border-orange-300">
                  <h2 className={`${anton.className} text-orange-400 text-4xl  font-bold`}>
                    01
                  </h2>
                  <h3 className={`${anton.className} text-orange-500 font-semibold mt-1`}>
                    Measure Your Grainly
                  </h3>
                  <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                    Use the included 35g scoop to measure your Grainly Cream of
                    Rice into a bowl. This ensures the perfect portion every
                    time for optimal texture and consistency.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* STEP 03 */}
          <div className="flex items-center justify-center mt-6">
            <div className="relative rotate-[14deg]">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10">
                <div className="w-6 h-6 bg-red-500 rounded-full shadow-lg"></div>
                <div className="w-3 h-3 bg-red-600 rounded-full absolute top-1.5 left-1.5"></div>
              </div>

              <div className="w-[320px] bg-white rounded-2xl shadow-xl px-2 py-10">
                <div className="bg-orange-50 rounded-xl p-4 border border-purple-300">
                  <h2 className={`${anton.className} text-purple-400 text-4xl  font-bold`}>
                    03
                  </h2>
                  <h3 className={`${anton.className} text-purple-500  font-semibold mt-1`}>
                    Make It Your Own
                  </h3>
                  <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                    Add your favorite toppings (fruits, nuts, protein powder, or
                    nut butter) to make it your own. Get creative with flavors
                    and textures!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-10 w-full max-w-[400px]">
          {/* STEP 02 */}
          <div className="flex items-center justify-center">
            <div className="relative rotate-[-8deg]">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10">
                <div className="w-6 h-6 bg-red-500 rounded-full shadow-lg"></div>
                <div className="w-3 h-3 bg-red-600 rounded-full absolute top-1.5 left-1.5"></div>
              </div>

              <div className="w-[320px] bg-white rounded-2xl shadow-xl px-2 py-10">
                <div className="bg-orange-50 rounded-xl p-4 border border-red-300">
                  <h2 className= {`${anton.className} text-red-700 text-4xl font-bold`}>
                    02
                  </h2>
                  <h3 className={`${anton.className} text-red-800  font-semibold mt-1`}>
                    Add Liquid
                  </h3>
                  <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                    Add hot (not boiling) water or milk and stir thoroughly to
                    avoid lumps.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* STEP 04 */}
          <div className="flex items-center justify-center mt-6">
            <div className="relative rotate-[14deg]">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10">
                <div className="w-6 h-6 bg-red-500 rounded-full shadow-lg"></div>
                <div className="w-3 h-3 bg-red-600 rounded-full absolute top-1.5 left-1.5"></div>
              </div>

              <div className="w-[320px] bg-white rounded-2xl shadow-xl px-2 py-10">
                <div className="bg-orange-50 rounded-xl p-4 border border-green-800">
                  <h2 className={`${anton.className} text-green-800 text-4xl  font-bold`}>
                    04
                  </h2>
                  <h3 className={`${anton.className} text-green-800  font-semibold mt-1`}>
                    Ready To Eat
                  </h3>
                  <p className="text-gray-800 text-sm mt-2 leading-relaxed">
                    Stir for 10–15 seconds and let it sit for 1 minute. Grainly
                    thickens naturally into a creamy texture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepsSection;
