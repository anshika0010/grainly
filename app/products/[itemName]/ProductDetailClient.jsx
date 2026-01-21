"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiPlus, FiMinus } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";

export default function ProductDetailClient({ products, itemName }) {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  const product = useMemo(() => {
    if (!itemName || !products.length) return null;
    return products.find(
      (p) => p.itemName?.toLowerCase() === itemName.toLowerCase()
    );
  }, [itemName, products]);

  useEffect(() => {
    if (product?.images?.length) {
      setSelectedImage(product.images[0]);
    }
  }, [product]);

  if (!product)
    return <div className="mt-40 text-center">Product Not Found</div>;

  const tabs = [
    { id: "description", label: "DESCRIPTION" },
    { id: "key-benefits", label: "KEY BENEFITS" },
    { id: "why-choose", label: "WHY CHOOSE" },
    { id: "supplement-facts", label: "SUPPLEMENT FACTS" },
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto p-6 grid md:grid-cols-2 gap-10 mt-20">
        {/* IMAGE */}
        <div>
          <Image
            src={selectedImage}
            alt={product.flavour}
            width={600}
            height={600}
            className="w-full h-[580px] object-contain"
          />
        </div>

        {/* CONTENT */}
        <div>
          <h1 className="text-6xl font-bold text-orange-800">
            {product.flavour}
          </h1>

          <div className="flex mt-2">
            {[...Array(5)].map((_, i) => (
              <AiFillStar key={i} />
            ))}
          </div>

          <p className="mt-4 text-gray-600">
            {product.shortDescription}
          </p>

          <div className="mt-6 flex gap-4 items-center">
            <div className="flex items-center border rounded-full px-4 py-2">
              <button onClick={() => qty > 1 && setQty(qty - 1)}>
                <FiMinus />
              </button>
              <span className="px-6">{qty}</span>
              <button onClick={() => setQty(qty + 1)}>
                <FiPlus />
              </button>
            </div>

            <button
              onClick={() => setOpen(true)}
              className="bg-black text-white px-12 py-3 rounded-lg"
            >
              BUY NOW
            </button>
          </div>
        </div>
      </div>

      {/* TABS */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-6 border-b">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`text-xl ${
                activeTab === tab.id
                  ? "text-orange-500 border-b-2 border-orange-500"
                  : ""
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-6 text-gray-600">
          {activeTab === "description" && product.description}
        </div>
      </div>
      
    </>
  );
}
