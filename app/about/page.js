import React from "react";
import HeroSection from "./HeroSection";
import AboutGrainly from "./AboutGrainly";
import LetterMarquee from "../components/Home/Marquee";
import WhyChooseUs from "./WhyChooseUs";
import FAQSection from "../components/Home/FAQSection";

export const metadata = {
  title: "About Grainly Foods | Our Cream of Rice Nutrition Brand",
  description:
    "Learn about Grainly Foods, our mission to redefine Cream of Rice with clean ingredients, bold flavors, and performance nutrition.",

  alternates: {
    canonical: "https://www.grainly-foods.com/about",
  },

  openGraph: {
    title: "About Grainly Foods | Our Cream of Rice Nutrition Brand",
    description:
      "Learn about Grainly Foods, our mission to redefine Cream of Rice with clean ingredients, bold flavors, and performance nutrition.",
    url: "https://www.grainly-foods.com/about",
    siteName: "Grainly-Foods",
    images: [
      {
        url: "https://www.grainly-foods.com/logo.webp",
        width: 1200,
        height: 630,
        alt: "Grainly Foods Logo",
      },
    ],
    locale: "en_AE",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About Grainly Foods | Our Cream of Rice Nutrition Brand",
    description:
      "Learn about Grainly Foods, our mission to redefine Cream of Rice with clean ingredients, bold flavors, and performance nutrition.",
    images: ["https://www.grainly-foods.com/logo.webp"],
    site: "@GrainlyFoods", // optional
  },

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "Grainly Foods", url: "https://www.grainly-foods.com" }],

  other: {
    "geo.region": "AE-DU",
    "geo.placename": "Dubai",
    language: "English",
  },
};
const page = () => {
  return (
    <div>
      <HeroSection />
      <AboutGrainly />
      <WhyChooseUs />
      <FAQSection />
      <LetterMarquee />
    </div>
  );
};

export default page;
