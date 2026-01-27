import BlogDetailClient from "./BlogDetailClient";

// slugify
const slugify = (text) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

// fetch blog
async function getBlog(slug) {
  const res = await fetch("https://drippy.rbhardwaj.com/api/blogapi.php", {
    cache: "no-store",
  });

  const data = await res.json();

  return data.find((item) => slugify(item.title) === decodeURIComponent(slug));
}

/* 🔥 SEO */
export async function generateMetadata({ params }) {
  const { slug } = await params; // ✅ correct

  const blog = await getBlog(slug);

  if (!blog) {
    return {
      title: "Blog Not Found | Grainly Foods",
    };
  }

  const canonicalUrl = `https://www.grainly-foods.com/blogdetail/${slug}`;

  return {
    title: blog.title,
    description:
      blog.metaDescription ||
      "Read the latest nutrition insights from Grainly Foods.",

    alternates: {
      canonical: canonicalUrl, // ✅ FIX
    },

    openGraph: {
      title: blog.title,
      description:
        blog.metaDescription ||
        "Read the latest nutrition insights from Grainly Foods.",
      url: canonicalUrl, // ✅ FIX
      siteName: "Grainly-Foods",
      images: [
        {
          url: blog.image || "https://www.grainly-foods.com/logo.webp",
          width: 1200,
          height: 630,
        },
      ],
      type: "article",
      locale: "en_AE",
    },

    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description:
        blog.metaDescription ||
        "Read the latest nutrition insights from Grainly Foods.",
      images: [blog.image || "https://www.grainly-foods.com/logo.webp"],
    },

    robots: {
      index: true,
      follow: true,
    },

    authors: [{ name: blog.author || "Grainly Foods" }],
  };
}

/* PAGE */
export default async function BlogDetailPage({ params }) {
  const { slug } = await params; // ✅ VERY IMPORTANT

  const blog = await getBlog(slug);

  if (!blog) {
    return <p className="text-center py-20">Blog Not Found</p>;
  }

  return <BlogDetailClient blogDetail={blog} />;
}
