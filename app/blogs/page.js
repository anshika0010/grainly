import HeroSection from "./HeroSection";

export const metadata = {
  title: "Nutrition & Fitness Blog | Grainly Foods",
  description:
    "Explore Grainly Foods blogs for nutrition tips, Cream of Rice benefits, recipes, and fitness insights.",

  alternates: {
    canonical: "https://www.grainly-foods.com/blogs",
  },

  openGraph: {
    title: "Nutrition & Fitness Blog | Grainly Foods",
    description:
      "Explore Grainly Foods blogs for nutrition tips, Cream of Rice benefits, recipes, and fitness insights.",
    url: "https://www.grainly-foods.com/blogs",
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
    title: "Nutrition & Fitness Blog | Grainly Foods",
    description:
      "Explore Grainly Foods blogs for nutrition tips, Cream of Rice benefits, recipes, and fitness insights.",
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

const Page = () => {
  return (
    <div>
      <HeroSection />
    </div>
  );
};

export default Page;
