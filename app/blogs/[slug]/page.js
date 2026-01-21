"use client";

import { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const slugify = (text) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

export default function BlogDetailPage() {
  const { slug } = useParams();
  const [blogDetail, setBlogDetail] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);
  const answerRefs = useRef([]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    async function fetchBlog() {
      try {
        const res = await fetch("https://drippy.rbhardwaj.com/api/blogapi.php");
        const data = await res.json();

        const blog = data.find(
          (item) => slugify(item.title) === decodeURIComponent(slug),
        );

        setBlogDetail(blog || null);
      } catch (err) {
        console.error(err);
      }
    }

    fetchBlog();
  }, [slug]);

  if (!blogDetail) {
    return <p className="text-center py-20">Loading...</p>;
  }

  const faqData = blogDetail?.faq ? JSON.parse(blogDetail.faq) : [];

  return (
    <div className="max-w-[1300px] mx-auto px-6 py-10 flex gap-10">
      {/* SIDEBAR */}
      <aside className="w-[280px] hidden lg:block">
        <h2 className="text-2xl font-bold mb-4">Wellness Hub</h2>

        <Link
          href="/blogs"
          className="block bg-black text-white px-4 py-2 rounded mb-6"
        >
          ← Back to Blogs
        </Link>

        <h4 className="font-semibold mb-3">CATEGORIES</h4>

        <div className="flex flex-col gap-2 text-sm">
          <Link href="/blogs">Cream of Rice Basics</Link>
          <Link href="/blogs">Weight Balance & Smart Eating</Link>
          <Link href="/blogs">Digestive Comfort</Link>
          <Link href="/blogs">Busy Lifestyle Nutrition</Link>
          <Link href="/blogs">Evening & Night Meals</Link>
        </div>
      </aside>

      {/* CONTENT */}
      <main className="flex-1">
        <h1 className="text-3xl font-bold">{blogDetail.title}</h1>

        <div className="flex justify-between items-center mt-4">
          <div>
            <p className="text-blue-600 font-semibold text-lg">
              {blogDetail.author}
            </p>
            <p className="text-sm text-gray-600">Posted on {blogDetail.date}</p>
          </div>

          <button
            className="p-3 rounded-full bg-gray-200"
            onClick={() =>
              navigator.share?.({
                title: blogDetail.title,
                text: "Check out this blog",
                url: window.location.href,
              })
            }
          >
            🔗
          </button>
        </div>

        {/* HERO IMAGE */}
        <div className="relative w-full h-[500px] my-8">
          <Image
            src={
              blogDetail.image ||
              "https://via.placeholder.com/800x500?text=No+Image"
            }
            alt={blogDetail.title}
            fill
            className="object-cover rounded-xl"
            sizes="100vw"
          />
        </div>

        {/* CONTENT */}
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: blogDetail.content }}
        />

        {/* FAQ */}
        {faqData.length > 0 && (
          <div className="mt-14">
            <h3 className="text-2xl font-bold mb-6">
              Frequently Asked Questions
            </h3>

            {faqData.map((item, index) => (
              <div key={index} className="border-b py-4">
                <button
                  className="flex justify-between w-full font-medium"
                  onClick={() => toggleFAQ(index)}
                >
                  {item.question}
                  <span>{openIndex === index ? "−" : "+"}</span>
                </button>

                <div
                  ref={(el) => (answerRefs.current[index] = el)}
                  style={{
                    maxHeight:
                      openIndex === index
                        ? `${answerRefs.current[index]?.scrollHeight}px`
                        : "0px",
                    overflow: "hidden",
                    transition: "max-height 0.3s ease",
                  }}
                >
                  <p className="mt-3 text-gray-700">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
