"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, X } from "lucide-react";
import { anton } from "../lib/fonts";

export default function FAQClient() {
  const [open, setOpen] = useState(1);

  const faqData = [
    {
      id: 1,
      question: "What exactly is Cream of Rice?",
      answer:
        "Cream of rice is a smooth cereal made from finely milled rice that is cooked with water or milk into a warm, porridge-like consistency. It is valued for being easy to digest, quick to prepare, and suitable for everyday meals. Unlike many modern breakfast products, it relies on a single grain base rather than a mix of processed ingredients.Grainly Cream of Rice refines this classic food by improving texture consistency, preparation speed, and flavour variety, making it more practical for modern routines.",
    },
    {
      id: 2,
      question: "Is cream of rice considered healthy?",
      answer:
        "Cream of rice is a grain-based food that can be part of a balanced diet. It provides carbohydrates that support daily energy needs and is often chosen for its simplicity and digestibility.Grainly improves on traditional cream of rice by removing added sugar and ensuring predictable texture, allowing people to enjoy it regularly without relying on heavy toppings or sweeteners.",
    },
    {
      id: 3,
      question: "Why do people choose cream of rice over oatmeal?",
      answer:
        "Many people find cream of rice easier to digest than oats, especially when eaten early in the morning or close to physical activity. Oats are higher in fiber and can feel heavy for some individuals.Grainly Cream of Rice offers a smoother texture, faster preparation, and lighter feel while still providing warmth and satiety, which is why many people switch to it for daily use.",
    },
    {
      id: 4,
      question: "Is cream of rice good for busy lifestyles?",
      answer:
        "Yes. Cream of rice is one of the fastest warm meals available. Instant formats like Grainly can be prepared in about one minute with hot water or warm milk, making it ideal for busy mornings, workdays, or quick meals.Grainly is designed specifically for convenience without sacrificing the feeling of a real, warm meal.",
    },
    {
      id: 5,
      question: "Is cream of rice easy to digest?",
      answer:
        "Cream of rice is commonly chosen by people with sensitive digestion because of its smooth texture and minimal processing. It does not contain rough fiber or dense grains that can cause discomfort.Grainly enhances this benefit by using finely milled rice and ensuring even hydration, reducing the risk of graininess or uneven texture that can affect digestion.",
    },
    {
      id: 6,
      question: "Can cream of rice be eaten every day?",
      answer:
        "Yes. Cream of rice is suitable for daily consumption when eaten as part of a varied diet. Its neutral base allows it to be paired differently depending on appetite and routine.Grainly supports daily use by offering multiple flavours, consistent results, and no added sugar, helping prevent boredom or overdependence on toppings.",
    },
    {
      id: 7,
      question: "Is Grainly cream of rice gluten free?",
      answer:
        "Grainly Cream of Rice is made from rice, which is naturally gluten free. This makes it suitable for people avoiding gluten who still want a warm, comforting cereal.Unlike some gluten free options that feel dry or processed, Grainly maintains a smooth and satisfying texture.",
    },
    {
      id: 8,
      question: "Can cream of rice be used for Savory meals?",
      answer:
        "Yes. Cream of rice can be prepared with warm broth instead of water or milk and paired with eggs, vegetables, or herbs for savoury meals.Grainly neutral rice base and consistent texture make it especially suitable for both sweet and savory preparations.",
    },
    {
      id: 9,
      question: "How does Grainly differ from regular cream of rice brands?",
      answer:
        "Traditional cream of rice products often requires cooking, offer limited flavours, and produce inconsistent texture. Grainly improves the category by focusing on instant preparation, refined milling, flavour balance, and daily usability.Grainly is designed as a modern food solution rather than a nostalgic cereal, making it easier to integrate into real routines.",
    },
    {
      id: 10,
      question: "Does Grainly add sugar for flavour?",
      answer:
        "No. Grainly Cream of Rice contains no added sugar. Flavour is developed through balance and aroma rather than sweetness, allowing the product to remain suitable for frequent use. This approach helps avoid energy crashes and reduces the need for additional sweeteners.",
    },
    {
      id: 11,
      question: "Is cream of rice suitable for athletes and active people?",
      answer:
        "Cream of rice is commonly used by athletes because it provides easily digestible carbohydrates without heaviness. It is especially useful before or after physical activity. Grainly is preferred by many active individuals due to its predictable texture, quick preparation, and ability to pair easily with protein or other foods.",
    },
    {
      id: 12,
      question: "Can cream of rice help with clean eating?",
      answer:
        "Cream of rice fits well into clean eating patterns because it is simple, familiar, and minimally processed. It does not rely on complex ingredients or aggressive health claims.Grainly supports clean eating by offering simplicity without restriction, allowing people to enjoy flavour and consistency without compromising routine.",
    },
    {
      id: 13,
      question: "Why is Grainly better for long-term use than trend foods?",
      answer:
        "Many trend foods are difficult to maintain because they rely on novelty, strict rules, or complicated preparation. Cream of rice works because it is flexible, warm, and dependable. Grainly refines this reliability by improving convenience and flavour variety, making it easier to stick with over time rather than abandoning after initial interest.",
    },
    {
      id: 14,
      question:
        "Who should consider adding Grainly cream of rice to their diet?",
      answer:
        "Grainly is suitable for people seeking easy nutritious meals, busy professionals, athletes, individuals with sensitive digestion, families, and anyone who prefers warm, simple foods that fit daily life.",
    },
    {
      id: 15,
      question: "It is designed to support consistency rather than perfection?",
      answer:
        "Below are 20 additional high-intent FAQs, written to target People Also Ask, featured snippets, and long-tail searches, while consistently positioning Grainly Cream of Rice as the superior option. These are original, human, and niche-accurate.",
    },
    {
      id: 16,
      question: "Is cream of rice better than cereal for breakfast?",
      answer:
        "Many packaged cereals are heavily processed and high in added sugar, which can cause quick energy crashes. Cream of rice offers a warm, slow-eating experience that feels more filling and controlled.Grainly elevates this by offering flavour without sugar and a texture that stays smooth, making it a better daily breakfast choice than cold cereal.",
    },
    {
      id: 17,
      question: "Does cream of rice cause bloating?",
      answer:
        "Cream of rice is generally low in fiber and gentle on the stomach, which makes bloating less common compared to oats or wheat cereals.Grainly uses finely milled rice and consistent hydration ratios, helping reduce digestive discomfort caused by uneven cooking or grain clumping.",
    },
    {
      id: 18,
      question: "Can cream of rice be eaten at night?",
      answer:
        "Yes. Cream of rice is often consumed in the evening because it is light, warm, and easy to digest.Grainly dessert-style flavours without added sugar make it especially suitable for nighttime meals without feeling heavy or overstimulating.",
    },
    {
      id: 19,
      question: "Is cream of rice good for weight management?",
      answer:
        "Cream of rice can support weight management when portioned properly because it is predictable, simple, and easy to control.Grainly includes a fixed scoop size and consistent thickness, which helps prevent overeating caused by guesswork or uneven portions.",
    },
    {
      id: 20,
      question: "Does cream of rice spike blood sugar?",
      answer:
        "Like any carbohydrate food, cream of rice affects blood sugar, but its impact depends on portion size and what it is paired with.Grainly no-added-sugar formula and smooth digestion profile help maintain steadier energy compared to sugary cereals or pastries.",
    },
    {
      id: 21,
      question: "Can kids eat cream of rice?",
      answer:
        "Cream of rice is commonly used for children due to its soft texture and mild flavour. Grainly avoids harsh sweetness and focuses on gentle flavours, making it suitable for families who want simple warm meals without excessive sugar.",
    },
    {
      id: 22,
      question: "Is cream of rice suitable for seniors?",
      answer:
        "Yes. Cream of rice is often chosen by older adults because it is easy to chew, swallow, and digest.Grainly consistent texture ensures it does not become gritty or thick, which can be a concern with traditional versions.",
    },
    {
      id: 23,
      question: "Can cream of rice be used as a meal replacement?",
      answer:
        "Cream of rice can serve as a light meal when paired with milk, yogurt, or other foods. Grainly flavour variety and reliable preparation make it practical for people who need a quick, warm option without cooking complexity.",
    },
    {
      id: 24,
      question: "Is cream of rice good before exercise?",
      answer:
        "Cream of rice is frequently consumed before physical activity because it digests quickly and does not sit heavy in the stomach.Grainly instant format allows preparation even minutes before activity, making it ideal for modern schedules.",
    },
    {
      id: 25,
      question: "Is cream of rice good after exercise?",
      answer:
        "After activity, people often prefer foods that are gentle and easy to eat. Grainly smooth texture and neutral rice base make it easy to combine with other foods without digestive stress.",
    },
    {
      id: 26,
      question: "How is Grainly different from instant porridges?",
      answer:
        "Many instant porridges rely on additives, sweeteners, or mixed grains that affect digestion and taste consistency.Grainly focuses on rice as the sole grain, improving predictability, texture, and flavour clarity.",
    },
    {
      id: 27,
      question: "Why does Grainly offer so many flavours?",
      answer:
        "Food boredom is one of the main reasons people abandon healthy routines.Grainly solves this by offering multiple flavours built on the same clean base, allowing variety without changing the core food.",
    },
    {
      id: 28,
      question: "Can cream of rice be made with plant milk?",
      answer:
        "Yes. Cream of rice works well with almond milk, oat milk, soy milk, or coconut milk. Grainly blends smoothly with both dairy and plant milks, maintaining consistency across options.",
    },
    {
      id: 29,
      question: "Is cream of rice processed food?",
      answer:
        "Cream of rice is minimally processed compared to many packaged foods, as it is simply milled rice prepared with liquid.Grainly avoids unnecessary processing steps and focuses on texture refinement rather than ingredient complexity.",
    },
    {
      id: 30,
      question: "Why does traditional cream of rice sometimes turn lumpy?",
      answer:
        "Lumps usually occur due to uneven heating or coarse milling. Grainly addresses this through micronized milling and optimized hydration behaviour, resulting in smoother bowls.",
    },
    {
      id: 31,
      question: "Can cream of rice be prepared without cooking?",
      answer:
        "Yes. Instant versions require only hot liquid. Grainly is designed specifically for no-cook preparation, making it faster and more consistent than stovetop alternatives.",
    },
    {
      id: 32,
      question: "Is Grainly suitable for people avoiding sugar?",
      answer:
        "Yes. Grainly contains no added sugar and relies on flavour balance rather than sweetness. This makes it easier to consume regularly without sugar fatigue.",
    },
    {
      id: 33,
      question: "How long does Grainly keep you full?",
      answer:
        "Satiety varies by individual, but the warm texture and slow eating pace of cream of rice often feel more filling than cold foods.Grainly thickness and serving size are designed to provide comfort and fullness without heaviness.",
    },
    {
      id: 34,
      question: "Is cream of rice good for gut comfort?",
      answer:
        "Cream of rice is often chosen during periods of digestive sensitivity because it is gentle and bland.Grainly maintains this benefit while adding flavour complexity without irritation.",
    },
    {
      id: 35,
      question: "Why is Grainly positioned as modern cream of rice?",
      answer:
        "Traditional cream of rice was built for a different era with longer cooking times and limited variety.Grainly modernizes the category by focusing on speed, flavour diversity, texture consistency, and daily practicality.",
    },
  ];

  return (
    <section className="mt-20">
      <div className="bg-black w-full px-8 py-28 shadow-xl ">
        <h1
          className={`${anton.className} text-5xl font-semibold text-white text-center`}
        >
          Frequently Asked Questions About Cream of Rice and Grainly
        </h1>
      </div>
      <div className=" max-w-5xl mx-auto flex flex-col gap-5 m-2 ">
        {faqData.map((faq) => (
          <motion.div key={faq.id} layout className="w-full">
            {/* QUESTION */}
            <motion.div
              layout
              whileHover={{ scale: 1.01 }}
              onClick={() => setOpen(open === faq.id ? null : faq.id)}
              className="bg-orange-100 px-6 py-4 rounded-full flex justify-between items-center cursor-pointer shadow-sm"
            >
              <p className="text-black  text-lg font-medium">
                {faq.id}. {faq.question}
              </p>

              <motion.button
                animate={{ rotate: open === faq.id ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow"
              >
                {open === faq.id ? <X size={18} /> : <ChevronDown size={18} />}
              </motion.button>
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
                  <p className="text-gray-900 text-md leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
