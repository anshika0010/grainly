"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX, FiShoppingCart, FiUser } from "react-icons/fi";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Products", path: "/products" },
    { label: "Why Grainly", path: "/about" },
    { label: "Contact", path: "/contact-us" },
    { label: "Blog", path: "/blogs" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${scrolled ? "bg-white shadow-md" : "bg-white"}`}
    >
      <div className="relative max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LEFT — Mobile Menu / Desktop Nav */}
        <div className="flex items-center gap-6">
          {/* Mobile Menu Button */}
          <button className="lg:hidden" onClick={() => setOpen(!open)}>
            {open ? (
              <FiX className="text-3xl text-orange-600" />
            ) : (
              <FiMenu className="text-3xl text-orange-600" />
            )}
          </button>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center anton-regular gap-8 text-[18px] font-medium">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={`transition-all ${
                    pathname === item.path
                      ? "text-orange-500 font-semibold"
                      : "hover:text-orange-500"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>


        {/* CENTER LOGO */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2">
          <Image
            src="/logo.webp"
            alt="Grainly-Logo"
            width={160}
            height={48}
            className="h-12 w-auto"
            priority
          />
        </Link>

        {/* RIGHT ICONS */}
        <div className="flex items-center gap-6 text-orange-600 text-xl">
          <FiShoppingCart className="cursor-pointer" />
          <FiUser className="cursor-pointer" />
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden bg-white border-t border-orange-100 px-6 py-4">
          <ul className="flex flex-col gap-4 anton-regular text-[18px] font-medium">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  onClick={() => setOpen(false)}
                  className={`block py-2 ${
                    pathname === item.path
                      ? "text-orange-500 font-semibold"
                      : "hover:text-orange-500"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
