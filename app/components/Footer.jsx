"use client";

import { useState } from "react";
import { ChevronRight, X } from "lucide-react";
import Link from "next/link";
import SocialIcons from "./SocialIcons";
import Image from "next/image";
import { anton } from "../lib/fonts";
import { motion, AnimatePresence } from "framer-motion";
export default function Footer() {
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) return;

    try {
      const res = await fetch("http://localhost:5000/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setOpen(true); // popup open
        setEmail("");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <footer className="w-full mt-20">
      {/* SUBSCRIBE SECTION */}
      <div className="bg-white py-20 text-center">
        <h2
          className={`${anton.className} text-5xl md:text-7xl font-extrabold tracking-wide`}
        >
          SUBSCRIBE TO <span className="color-text">GRAINLY</span>
        </h2>

        <p
          className={`${anton.className} text-gray-500 mt-4 text-xl  max-w-2xl mx-auto`}
        >
          Your inside scoop on what's new, what's next, and what's back in
          stock.
        </p>

        <form onSubmit={handleSubmit} className="flex justify-center mt-8">
          <div className="flex items-center w-[350px] md:w-[420px] bg-white border border-gray-300 rounded-full px-5 py-3 shadow-sm">
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent outline-none text-gray-700"
            />
            <button
              type="submit"
              className="bg-black px-6 py-1 text-white rounded-full font-medium flex items-center gap-2 cursor-pointer hover:bg-orange-500 transition"
            >
              Send
              <ChevronRight className="text-gray-200" />
            </button>
          </div>
        </form>

        {/* POPUP MODAL */}
        <AnimatePresence>
          {open && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white rounded-xl p-6 w-[90%] max-w-sm text-center relative"
                initial={{ scale: 0.8, y: 50, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.8, y: 50, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-3 right-3 text-gray-500 hover:text-black"
                >
                  <X />
                </button>

                <h2 className="text-xl font-semibold mb-2">🎉 Thank You!</h2>
                <p className="text-gray-600">
                  Thank you for subscribing. We’ll keep you updated!
                </p>

                <button
                  onClick={() => setOpen(false)}
                  className="mt-5 bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition"
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* BLACK FOOTER SECTION */}
      <div
        className={`${anton.className} bg-black text-white  py-12 px-6 md:px-16`}
      >
        <div className="max-w-7xl mx-auto">
          {/* TOP ROW */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12 border-b border-gray-700 pb-10">
            {/* LOGO + DESCRIPTION */}
            <div className="max-w-md">
              <Image
                src="/white-logo.webp"
                alt="Grainly"
                width={180} // 👈 required
                height={56} // 👈 required
                className="h-14 w-auto mb-4"
                priority
              />
              <p className="text-gray-400 text-lg leading-relaxed font-sans">
                Grainly Cream of Rice is a carbohydrate based powdered food made
                from finely milled rice. Cream of rice is widely consumed as a
                breakfast cereal and energy food because it is easy to digest,
                naturally gluten free, and provides clean carbohydrates.
              </p>
            </div>

            {/* LINKS */}
            <div>
              <p className="text-md tracking-wide mb-4">LINKS</p>

              <ul className="space-y-3 text-gray-400 font-sans">
                <li>
                  <Link href="/about" className="hover:text-white transition">
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    className="hover:text-white transition"
                  >
                    Shop
                  </Link>
                </li>
                <li>
                  <Link href="/blogs" className="hover:text-white transition">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/faqs" className="hover:text-white transition">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-us"
                    className="hover:text-white transition"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* FOLLOW US */}
            <div>
              <p className="text-md tracking-wide mb-4">FOLLOW US</p>
              <SocialIcons />
            </div>
          </div>

          {/* BOTTOM ROW */}
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-base mt-6 gap-4">
            <p>
              © {new Date().getFullYear()}, Grainly Cream Of Rice. All rights
              reserved.
            </p>

            <div className="flex flex-wrap gap-6">
              <Link href="/refundpolicy" className="hover:text-white">
                Refund policy
              </Link>
              <Link href="/privacypolicy" className="hover:text-white">
                Privacy policy
              </Link>
              <Link href="/termsofservice" className="hover:text-white">
                Terms of Service
              </Link>
              <Link href="/contact" className="hover:text-white">
                Contact information
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
