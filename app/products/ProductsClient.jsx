"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ProductsClient({ products = [], searchText }) {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = [
    { id: "All", label: "All" },
    { id: "classic", label: "Classic" },
    { id: "Global Delicious", label: "Global Delicious" },
    { id: "decadent", label: "Decadent" },
  ];

  const filteredProducts = products.filter((item) => {
    const matchCategory =
      activeTab === "All" ||
      item.category?.toLowerCase() === activeTab.toLowerCase();

    const matchFlavour = item.flavour
      ?.toLowerCase()
      .includes(searchText.toLowerCase());

    return matchCategory && matchFlavour;
  });

  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-6">
          <h2 className="text-3xl anton-regular">CATEGORIES</h2>

          <div className="flex gap-6 border-b">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-2 text-2xl anton-regular ${
                  activeTab === tab.id
                    ? "border-b-4 border-black"
                    : "text-gray-400"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* PRODUCTS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 gap-6">
          {filteredProducts.map((item) => (
            <div
              key={item._id}
              className="bg-[#f7f7f7] rounded-lg hover:shadow-lg transition"
            >
              <h5 className="text-3xl p-4 anton-regular">{item.flavour}</h5>

              <div className="flex justify-center">
                <Image
                  src={item.image}
                  alt={item.itemTitle || "Grainly product"}
                  width={380}
                  height={380}
                  className="object-contain"
                />
              </div>

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
      </div>
    </section>
  );
}
