"use client";

import React, { useState } from "react";
import { FiArrowUpRight, FiCheckCircle } from "react-icons/fi";
import { anton } from "../lib/fonts";
const ContactSection = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // 👉 future: API / email logic here

    setShowPopup(true);

    // Auto close popup after 3 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);

    // Reset form
    e.target.reset();
  };

  return (
    <>
      {/* ✅ THANK YOU POPUP */}
      {showPopup && (
        <div className="fixed top-6 right-6 z-50 bg-white border border-green-300 shadow-xl rounded-xl px-6 py-4 flex items-center gap-3 animate-slide-in">
          <FiCheckCircle className="text-green-500 text-2xl" />
          <div>
            <p className="font-semibold text-gray-900">Thank You!</p>
            <p className="text-sm text-gray-600">
              Your message has been sent successfully.
            </p>
          </div>
        </div>
      )}

      {/* CONTACT SECTION */}
      <section className={`${anton.className} w-full bg-white py-16 px-6`}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* LEFT SIDE */}
          <div>
            <h1 className="text-6xl text-orange-500 mb-10 tracking-tight">
              CONTACT
            </h1>

            <div className="space-y-6">
              <div className="flex items-center justify-between border border-gray-200 rounded-xl p-5 shadow-sm">
                <div>
                  <p className="font-semibold text-gray-900">Email us</p>
                  <p className="text-gray-500">info@grainly-foods.com</p>
                  <p className="text-gray-400 text-sm">
                    We’ll respond within 24 hours
                  </p>
                </div>
                <div className="h-10 w-10 bg-blue-500 text-white flex items-center justify-center rounded-full">
                  <FiArrowUpRight size={20} />
                </div>
              </div>

              <div className="flex items-center justify-between border border-gray-200 rounded-xl p-5 shadow-sm">
                <div>
                  <p className="font-semibold text-gray-900">Phone</p>
                  <p className="text-gray-500">+1 786-789-2121</p>
                  <p className="text-gray-400 text-sm">Mon–Fri: 9AM–6PM EST</p>
                </div>
                <div className="h-10 w-10 bg-blue-500 text-white flex items-center justify-center rounded-full">
                  <FiArrowUpRight size={20} />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="border border-orange-300 rounded-2xl p-8 shadow-sm">
            <h2 className="text-4xl text-gray-900">Send us a message</h2>
            <p className="text-lg text-gray-600 mt-2">
              We’d love to hear from you. Fill out the form below.
            </p>

            <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="text-gray-700">Name (required)</label>
                <input
                  type="text"
                  required
                  className="w-full border-b border-gray-300 focus:outline-none py-2"
                />
              </div>

              <div>
                <label className="text-gray-700">Email (required)</label>
                <input
                  type="email"
                  required
                  className="w-full border-b border-gray-300 focus:outline-none py-2"
                />
              </div>

              <div>
                <label className="text-gray-700">Message</label>
                <textarea
                  rows="3"
                  className="w-full border-b border-gray-300 focus:outline-none py-2"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-3 rounded-lg flex items-center justify-center gap-2 font-medium hover:bg-black transition"
              >
                <FiArrowUpRight />
                Send message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-in {
          animation: slideIn 0.4s ease-out;
        }
      `}</style>
    </>
  );
};

export default ContactSection;
