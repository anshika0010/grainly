import { fetchProducts } from "../lib/fetchProducts";
import ProductsClient from "./ProductsClient";

export default async function ProductsSection({
  searchText = "",
  excludeSlug = null,
}) {
  let products = [];

  try {
    products = await fetchProducts();
  } catch (error) {
    console.error("Failed to fetch products:", error);
  }

  // ✅ REAL FIELD: itemName
  if (excludeSlug) {
    products = products.filter(
      (item) => item.itemName?.toLowerCase() !== excludeSlug.toLowerCase(),
    );
  }

  return <ProductsClient products={products} searchText={searchText} />;
}
