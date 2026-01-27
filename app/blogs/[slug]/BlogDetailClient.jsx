"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./blogdetail.css";

export default function BlogDetailClient({ blogDetail }) {
  const [openIndex, setOpenIndex] = useState(null);
  const answerRefs = useRef([]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = blogDetail?.faq ? JSON.parse(blogDetail?.faq) : [];
  const validFaqData = Array.isArray(faqData)
    ? faqData.filter(
        (item) => item.question?.trim() !== "" && item.answer?.trim() !== "",
      )
    : [];
  return (
    <div className="max-w-full  mx-auto px-6 py-10 flex gap-10">
      {/* SIDEBAR */}
      <aside className="w-[280px] hidden lg:block">
        <h2 className="text-2xl font-bold mb-4">Wellness Hub</h2>

        <Link
          href="/blogs"
          className="block bg-black text-white px-4 py-2 rounded mb-6"
        >
          ← Back to Blogs
        </Link>

        <Link href="/blogs" className="nav-item">
          <i className="material-icons">&#xe7fd;</i> Cream of Rice Basics
        </Link>

        <Link href="/blogs" className="nav-item">
          <i className="material-icons">&#xe85d;</i> Weight Balance & Smart
          Eating
        </Link>

        <Link href="/blogs" className="nav-item">
          <i className="material-icons">&#xe85d;</i> Digestive Comfort
        </Link>

        <Link href="/blogs" className="nav-item">
          <i className="material-icons">&#xe85d;</i> Busy Lifestyle Nutrition
          Relief
        </Link>

        <Link href="/blogs" className="nav-item">
          <i className="material-icons">&#xe85d;</i> Evening & Night Meals
        </Link>

        <Link href="/blogs" className="nav-item">
          <i className="material-icons">&#xe85d;</i> Rice Lovers Club
        </Link>

        <Link href="/blogs" className="nav-item">
          <i className="material-icons">&#xe85d;</i> Performance & Energy
        </Link>

        <Link href="/blogs" className="nav-item">
          <i className="material-icons">&#xe85d;</i> Anti Diet Culture
        </Link>

        <Link href="/blogs" className="nav-item">
          <i className="material-icons">&#xe85d;</i> Grainly Education Hub
        </Link>

        <Link href="/blogs" className="nav-item">
          <i className="material-icons">&#xe85d;</i> Recipes & Creative Bowls
        </Link>
      </aside>

      {/* CONTENT */}
      <main className="flex-1">
        <h1 className="text-3xl font-bold">{blogDetail.title}</h1>

        <p className="text-sm text-gray-600 mt-2">
          {blogDetail.author} · {blogDetail.date}
        </p>

        <div className="relative w-full h-[500px] my-8">
          <Image
            src={blogDetail.image}
            alt={blogDetail.title}
            fill
            className="object-cover rounded-xl"
          />
        </div>

        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: blogDetail.content }}
        />

        {/* FAQ Section */}
        {validFaqData.length > 0 && (
          <div className="faq-right">
            <div className="faq-left">
              <h3>
                Frequently Asked <br />
                <span>Questions</span>
              </h3>
            </div>

            {validFaqData.map((item, index) => (
              <div className="faq-item" key={index}>
                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{item.question}</span>
                  <span
                    className={`icon ${openIndex === index ? "rotate" : ""}`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`faq-answer ${openIndex === index ? "open" : ""}`}
                  ref={(el) => (answerRefs.current[index] = el)}
                  style={{
                    maxHeight:
                      openIndex === index && answerRefs.current[index]
                        ? `${answerRefs.current[index].scrollHeight}px`
                        : "0px",
                    overflow: "hidden",
                    transition: "max-height 0.4s ease",
                  }}
                >
                  {item.answer}
                  <br />
                  <br />
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
