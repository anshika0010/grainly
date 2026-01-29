import { fetchProducts } from "../../lib/fetchProducts";
import ProductsSection from "../ProductsSection";
import ProductDetailClient from "./ProductDetailClient";

export default async function ProductDetailPage({ params }) {
  const { itemName } = await params;

  let products = [];
  try {
    products = await fetchProducts();
  } catch (error) {
    console.error(error);
  }

  return (
    <>
      {" "}
      <ProductDetailClient products={products} itemName={itemName} />
      <ProductsSection excludeSlug={itemName} />
    </>
  );
}
