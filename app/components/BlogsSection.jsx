"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const slugify = (text) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

export default function BlogSection() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://drippy.rbhardwaj.com/api/blogapi.php")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data
          .filter(
            (b) => b.brand === "grainly" && new Date(b.date) <= new Date()
          )
          .slice(0, 5);

        setBlogs(filtered);
      })
      .catch(console.error);
  }, []);

  return (
    <section
      className="relative w-full py-20"
      style={{
        backgroundImage: "url(/images/bg.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/80" />

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold anaton-regular"
        >
          GRAINLY
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[120px] md:text-[160px]  anaton-regular color-text leading-none"
        >
          BLOG
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-gray-600 max-w-3xl mx-auto text-lg mt-4"
        >
          Stay updated with our latest insights, tips, and stories.
        </motion.p>

        {/* Swiper */}
        <div className="mt-16">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 1.2 },
              1024: { slidesPerView: 1.5 },
            }}
            className="pb-14"
          >
            {blogs.map((blog, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg px-6 py-12 m-2 flex flex-col md:flex-row gap-6 m-2"
                >
                  {/* IMAGE */}
                  <div className="relative w-full md:w-1/2 h-80">
                    <Image
                      src={blog.image || "/images/noimage.webp"}
                      alt={blog.title}
                      fill
                      className="rounded-xl object-fit aspect-auto"
                      sizes="(max-width: 868px) 100vw, 50vw"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="flex flex-col justify-center text-left">
                    <h4 className="text-2xl anton-regular">
                      {blog.title}
                    </h4>

                    <p className="text-gray-800 text-sm mt-2">
                      {blog.date}
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
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* View All */}
        <Link href="/blogs">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="button-2 mt-6 cursor-pointer"
          >
            View All
          </motion.button>
        </Link>
      </div>
    </section>
  );
}
