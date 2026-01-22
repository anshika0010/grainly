import FAQClient from "./FAQClient";

export const metadata = {
  title: "Grainly Foods FAQs | Cream of Rice, Nutrition & Usage",
  description:
    "Find answers to common questions about Grainly Foods cream of rice, ingredients, nutrition, preparation, digestion benefits, and storage details.",

  alternates: {
    canonical: "https://www.grainly-foods.com/faqs",
  },

  openGraph: {
    title: "Grainly Foods FAQs | Cream of Rice, Nutrition & Usage",
    description:
      "Find answers to common questions about Grainly Foods cream of rice, ingredients, nutrition, preparation, digestion benefits, and storage details.",
    url: "https://www.grainly-foods.com/faqs",
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
    title: "Grainly Foods FAQs | Cream of Rice, Nutrition & Usage",
    description:
      "Find answers to common questions about Grainly Foods cream of rice, ingredients, nutrition, preparation, digestion benefits, and storage details.",
    images: ["https://www.grainly-foods.com/logo.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function FAQsPage() {
  return <FAQClient />;
}
