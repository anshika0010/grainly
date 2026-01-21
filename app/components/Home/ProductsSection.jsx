import Image from "next/image";
import Link from "next/link";
// import Loader from "./Loader";
import { fetchProducts } from "../../lib/fetchProducts";

export default async function ProductsSection() {
  // Server-side fetch
  let products = [];
  try {
    products = await fetchProducts();
  } catch (err) {
    console.error("Failed to fetch products:", err);
  }

  const displayedItems = products.slice(0, 3);

  if (!products.length) return <div>Loading...</div>;

  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* TITLE */}
        <div className="flex items-center gap-3 mb-10 anton-regular">
          <div className="flex">
            <div className="w-4 h-4 border-t-4 border-r-4 border-gray-300 rotate-45"></div>
            <div className="w-4 h-4 border-t-4 border-r-4 border-gray-400 rotate-45"></div>
            <div className="w-4 h-4 border-t-4 border-r-4 border-gray-500 rotate-45"></div>
          </div>
          <h2 className="text-4xl tracking-wide">NEW IN DEMAND</h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedItems.map((item) => (
            <div
              key={item._id}
              className="bg-[#f7f7f7] rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 hover:bg-white"
            >
              <h3 className="text-3xl p-4 anton-regular">{item.flavour}</h3>

              <div className="p-4 flex justify-center items-center h-[320px]">
                <Image
                  src={item.image}
                  alt={item.itemTitle || "Grainly cream-of-rice"}
                  width={380}
                  height={320}
                  className="object-contain"
                  priority={true} // for faster loading of hero products
                />
              </div>

              {/* Centered Button */}
              <div className="flex justify-center py-4">
                <Link
                  href={`/products/${item.itemName
                    ?.replace(/\s+/g, "-")
                    .toLowerCase()}`}
                >
                  <button className="btn">Shop Now</button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center pb-6 mt-3">
          <Link href="/products">
            <button className="button-2">VIEW ALL</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
