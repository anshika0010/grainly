import { fetchProducts } from "../lib/fetchProducts";
import ProductsClient from "./ProductsClient";

export default async function ProductsSection({ searchText = "" }) {
  let products = [];

  try {
    products = await fetchProducts();
  } catch (error) {
    console.error("Failed to fetch products:", error);
  }

  return (
    <ProductsClient
      products={products}
      searchText={searchText}
    />
  );
}
