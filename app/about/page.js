import React from "react";
import HeroSection from "./HeroSection";
import AboutGrainly from "./AboutGrainly";
import LetterMarquee from "../components/Home/Marquee";
import WhyChooseUs from "./WhyChooseUs";
import FAQSection from "../components/Home/FAQSection";

const page = () => {
  return (
    <div>
      <HeroSection />
      <AboutGrainly />
      <WhyChooseUs/>
      <FAQSection/>
      <LetterMarquee />
    </div>
  );
};

export default page;
