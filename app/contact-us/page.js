import React from "react";
import ContactSection from "./ContactSection";
import LetterMarquee from "../components/Home/Marquee";

export const metadata = {
  title: "Contact Us | Grainly Foods Cream of Rice",
  description:
    "Contact Grainly Foods for assistance with our Cream of Rice products and nutrition information.",

  alternates: {
    canonical: "https://www.grainly-foods.com/contact",
  },

  openGraph: {
    title: "Contact Us | Grainly Foods Cream of Rice",
    description:
      "Contact Grainly Foods for assistance with our Cream of Rice products and nutrition information.",
    url: "https://www.grainly-foods.com/contact",
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
    title: "Contact Us | Grainly Foods Cream of Rice",
    description:
      "Contact Grainly Foods for assistance with our Cream of Rice products and nutrition information.",
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
      <ContactSection />
      <LetterMarquee />
    </div>
  );
};

export default page;
