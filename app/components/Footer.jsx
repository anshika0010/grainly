"use client";

// import { ChevronRight } from "lucide-react";
import Link from "next/link";
import SocialIcons from "./SocialIcons";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full mt-20">
      {/* SUBSCRIBE SECTION */}
      <div className="bg-white py-20 text-center">
        <h2 className="text-5xl md:text-7xl font-extrabold anton-regular tracking-wide">
          SUBSCRIBE TO <span className="color-text">GRAINLY</span>
        </h2>

        <p className="text-gray-500 mt-4 text-xl anton-regular max-w-2xl mx-auto">
          Your inside scoop on what's new, what's next, and what's back in
          stock.
        </p>

        {/* EMAIL INPUT */}
        <div className="flex justify-center mt-8">
          <div className="flex items-center w-[350px] md:w-[420px] bg-white border border-gray-300 rounded-full px-5 py-3 shadow-sm">
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent outline-none text-gray-700"
            />
            {/* <ChevronRight className="text-gray-500" /> */}
          </div>
        </div>
      </div>

      {/* BLACK FOOTER SECTION */}
      <div className="bg-black text-white anton-regular py-12 px-6 md:px-16">
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
                  <Link href="/contact" className="hover:text-white transition">
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
