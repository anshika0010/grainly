import Image from "next/image";
import HeroSection from "./components/Home/HeroSection";
import GrainlyDifference from "./components/Home/GrainlyDifference";
import FAQSection from "./components/Home/FAQSection";
import FeatureStrip from "./components/Home/FeatureStrip";
import LetterMarquee from "./components/Home/Marquee";
import StepsSection from "./components/Home/StepsSection";
import ProductsSection from "./components/Home/ProductsSection";
import BestSellers from "./components/Home/BestSellers";
import BlogSection from "./components/BlogsSection";
import HoverSection from "./components/Home/HoverSection";

export const metadata = {
  title: "Grainly Foods | Premium Flavored Cream of Rice Nutrition",

  description:
    "Browse the Grainly Foods Cream Of Rice collection, smooth, gluten-free, plant-based carbohydrate meals that mix easily and deliver clean energy for workouts or daily fuel.",

  alternates: {
    canonical: "https://www.grainly-foods.com/",
  },

  openGraph: {
    title: "Grainly Foods | Premium Flavored Cream of Rice Nutrition",
    description:
      "Browse the Grainly Foods Cream Of Rice collection, smooth, gluten-free, plant-based carbohydrate meals that mix easily and deliver clean energy for workouts or daily fuel.",
    url: "https://www.grainly-foods.com/",
    siteName: "Grainly-Foods",
    images: [
      {
        url: "https://www.grainly-foods.com/logo.webp",
        width: 1200,
        height: 630,
        alt: "Grainly Foods Cream of Rice",
      },
    ],
    locale: "en_AE",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    site: "Grainly-Foods",
    title: "Grainly Foods | Premium Flavored Cream of Rice Nutrition",
    description:
      "Browse the Grainly Foods Cream Of Rice collection, smooth, gluten-free, plant-based carbohydrate meals that mix easily and deliver clean energy for workouts or daily fuel.",
    images: ["https://www.grainly-foods.com/logo.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "Grainly Foods", url: "https://www.grainly-foods.com" }],
};
export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureStrip />
      <ProductsSection />
      <GrainlyDifference />
      <BestSellers />
      <StepsSection />
      <BlogSection />
      <HoverSection />
      <FAQSection />
      <LetterMarquee />
    </>
  );
}
