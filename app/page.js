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

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureStrip />
      <ProductsSection />
      <GrainlyDifference />
      <BestSellers />
      <StepsSection />
      <BlogSection/>
      <FAQSection />
      <LetterMarquee />
    </>
  );
}
