"use client";

import React, { useState , useEffect } from "react";
import LetterMarquee from "../components/Home/Marquee";
import HeroSection from "./HeroSection";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";
const slugify = (text) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
const Page = () => {
  const [activeCat, setActiveCat] = useState("all");
   const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("https://drippy.rbhardwaj.com/api/blogapi.php")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter(
          (b) => b.brand === "grainly" && new Date(b.date) <= new Date(),
        );
        setBlogs(filtered);
      })
      .catch(console.error);
  }, []);

  const filteredBlogs =
    activeCat === "all" ? blogs : blogs.filter((b) => b.category === activeCat);

  const categories = [
    { id: "all", label: "All" },
    { id: "Cream of Rice Basics", label: "Cream of Rice Basics" },
    {
      id: " Weight Balance & Smart Eating",
      label: "Weight Balance & Smart Eating",
    },
    { id: "Digestive Comfort", label: "Digestive Comfort" },
    { id: "Busy Lifestyle Nutrition", label: "Busy Lifestyle Nutrition" },
    { id: "Evening & Night Meals", label: "Evening & Night Meals" },
    { id: " Rice Lovers Club", label: "Rice Lovers Club" },
    { id: " Anti Diet Culture", label: "Anti Diet Culture" },
    { id: " Performance & Energy", label: "Performance & Energy" },
    { id: "Recipes & Creative Bowls", label: "Recipes & Creative Bowls" },
    { id: " Grainly Education Hub", label: "Grainly Education Hub" },
  ];
  return (
    <div>
      <HeroSection />
      <section className="max-w-7xl mx-auto px-6 flex flex-wrap gap-4 justify-center my-10">
        {" "}
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => setActiveCat(c.id)}
            className={`px-7 py-2 rounded-full text-sm font-medium transition-all
                ${
                  activeCat === c.id
                    ? "bg-black  text-white shadow-md scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                }`}
          >
            {c.label}
          </button>
        ))}
      </section>
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 py-16">
        {filteredBlogs.map((blog, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col md:flex-row gap-6"
          >
            <div className="relative w-full md:w-1/1 h-56">
              <Image
                src={blog.image || "/images/noimage.webp"}
                alt={blog.title}
                fill
                className="rounded-xl object-fit aspect-auto"
                sizes="(max-width: 868px) 100vw, 50vw"
              />
            </div>

            <div className="flex flex-col justify-center text-left">
              <h4 className="text-lg  anton-regular">{blog.title}</h4>

              <p className="text-gray-800 text-sm mt-2">
                {blog.date} | {blog.author}
              </p>

              <p className="text-gray-600 text-md mt-4 line-clamp-3">
                {blog.short_description || blog.description}
              </p>

              <Link
                href={`/blogs/${slugify(blog.title)}`}
                className="mt-6 px-6 py-2 text-sm bg-black text-white rounded-es-4xl hover:bg-gray-800 transition w-fit"
              >
                Read more →
              </Link>
            </div>
          </motion.div>
        ))}
      </section>
      <LetterMarquee />
    </div>
  );
};

export default Page;
