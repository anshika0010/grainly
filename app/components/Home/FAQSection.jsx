"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, X } from "lucide-react";

export default function FAQSection() {
  const [open, setOpen] = useState(1);

  const faqData = [
    {
      id: 1,
      question: "What is cream of rice?",
      answer:
        "Cream of rice is a warm cereal made from rice that has been finely ground into a smooth powder. When mixed with hot water or warm milk, it thickens into a soft and creamy bowl similar to porridge. Grainly Cream of Rice is a modern version of this traditional food. It is made from finely milled rice and designed to be ready in about one minute without cooking. Unlike old style cream of rice that requires stove preparation, Grainly focuses on speed, consistency, and taste.",
    },
    {
      id: 2,
      question: "What makes Grainly Cream of Rice different from other brands?",
      answer:
        "Most cream of rice products on the market were originally designed decades ago for basic home cooking. They often require boiling and constant stirring. Grainly was built for modern routines. The rice is milled to a specific fineness so it absorbs liquid evenly, reducing lumps and creating a smoother texture. Grainly also offers dessert inspired and culturally inspired flavours without added sugar, making daily use easier and more enjoyable.",
    },
    {
      id: 3,
      question: "Is Grainly Cream of Rice healthy?",
      answer:
        "Grainly Cream of Rice is a carbohydrate based food. Carbohydrates are the body’s primary fuel source for physical activity and brain function. It contains no added sugar and is naturally gluten free. When paired with protein and healthy fats, it can be part of a balanced and practical diet.",
    },
    {
      id: 4,
      question: "Is Grainly Cream of Rice gluten free?",
      answer:
        "Yes. Grainly Cream of Rice is naturally gluten free because rice does not contain gluten. This makes it suitable for people avoiding gluten due to sensitivity or preference. Those with medical conditions should always review allergen information.",
    },
    {
      id: 5,
      question: "How much Grainly Cream of Rice should I eat?",
      answer:
        "A standard serving is one scoop (thirty five grams). For light activity or breakfast, one scoop is usually enough. For intense training or long days, two scoops may be used depending on individual energy needs.",
    },
  ];

  return (
    <div className="w-full mt-20 px-6 anton-regular md:px-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* LEFT SIDE */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl md:text-7xl leading-tight">
          FREQUENTLY ASKED <br />
          <span className="color-text">QUESTIONS</span>
        </h2>

        <p className="text-gray-600 mt-4 text-lg leading-relaxed">
          It's a section on a website where common questions from customers or
          visitors are answered clearly and briefly.
        </p>

        <h3 className="text-2xl mt-10">Any Question?</h3>
        <p className="text-gray-500 text-sm mt-1">
          You can ask anything you want to know.
        </p>

        <input
          type="text"
          placeholder="Enter Here"
          className="border border-gray-300 rounded-md color-text mt-4 w-full max-w-sm px-4 py-2 outline-none"
        />
      </motion.div>

      {/* RIGHT SIDE – FAQ ACCORDION */}
      <div className="flex flex-col gap-5">
        {faqData.map((faq) => (
          <motion.div key={faq.id} layout>
            {/* QUESTION */}
            <motion.div
              layout
              whileHover={{ scale: 1.01 }}
              onClick={() => setOpen(open === faq.id ? null : faq.id)}
              className="bg-orange-100 px-6 py-4 rounded-full flex justify-between items-center cursor-pointer shadow-sm"
            >
              <p className="color-text">
                {faq.id}. {faq.question}
              </p>

              <motion.span
                animate={{ rotate: open === faq.id ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow"
              >
                {open === faq.id ? <X size={18} /> : <ChevronDown size={18} />}
              </motion.span>
            </motion.div>

            {/* ANSWER */}
            <AnimatePresence initial={false}>
              {open === faq.id && (
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="bg-white border border-gray-200 rounded-2xl px-5 py-4 shadow-sm mt-2"
                >
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
