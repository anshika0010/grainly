// fetchProducts.js
export async function fetchProducts() {
  const res = await fetch(
    "https://grainly-backend-3.onrender.com/api/products",
    {
      next: { revalidate: 60 }, // cache 60 seconds for speed
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}
