// fetchProducts.js
export async function fetchProducts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}
