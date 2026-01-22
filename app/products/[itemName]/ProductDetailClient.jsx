"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiPlus, FiMinus } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import HowToMake from "../HowToMake";
import { anton } from "../../lib/fonts";
export default function ProductDetailClient({ products = [], itemName }) {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  const product = useMemo(() => {
    if (!itemName || !products.length) return null;
    return products.find(
      (p) => p.itemName?.toLowerCase() === itemName.toLowerCase(),
    );
  }, [itemName, products]);

  const selectedFlavour = product?.flavour;

  useEffect(() => {
    if (product?.images?.length > 0) {
      setSelectedImage(product.images[0]);
    }
  }, [product]);

  if (!product) {
    return <div className="mt-40 text-center">Product Not Found</div>;
  }

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
        <div className="bg-gray-100 rounded-2xl p-4">
          {selectedImage && (
            <Image
              src={selectedImage}
              alt={product.flavour}
              width={600}
              height={600}
              className="w-full h-[580px] object-contain rounded-2xl"
              priority
            />
          )}
        </div>

        {/* CONTENT */}
        <div>
          <h1
            className={`${anton.className} text-6xl font-bold text-orange-800`}
          >
            {product.flavour}
          </h1>

          <div className="flex mt-2 text-xl">
            {[...Array(5)].map((_, i) => (
              <AiFillStar key={i} />
            ))}
          </div>

          {/* TAGS */}
          <div className="flex flex-wrap gap-2 mt-3">
            {product?.tags?.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm font-medium text-orange-700 bg-orange-100 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* FLAVOURS */}
          <div className="mt-6">
            <p className={`${anton.className} font-semibold text-4xl mb-3`}>
              FLAVOURS
            </p>
            <div className="flex flex-wrap gap-3">
              {products.map(({ _id, flavour, itemName }) => (
                <Link
                  key={_id}
                  href={`/products/${itemName}`}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                    selectedFlavour === flavour
                      ? "bg-black text-white"
                      : "bg-gray-100 hover:bg-gray-300"
                  }`}
                >
                  {flavour}
                </Link>
              ))}
            </div>
          </div>

          <p className="mt-4 text-gray-600">{product.shortDescription}</p>

          {/* QTY + BUY */}
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
              className="bg-black cursor-pointer text-white px-12 py-3 rounded-lg font-bold"
            >
              BUY NOW
            </button>
          </div>
        </div>
      </div>

      {/* TABS */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className={`${anton.className} flex gap-6  border-b`}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`text-3xl pb-2 cursor-pointer ${
                activeTab === tab.id
                  ? "text-orange-500 border-b-2  border-orange-500"
                  : ""
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-6 text-gray-600 text-lg">
          {activeTab === "description" && product.description}
          {activeTab === "key-benefits" &&
            product.productBenefits?.map((b, i) => <li key={i}>{b}</li>)}
          {activeTab === "why-choose" &&
            product.directions?.map((d, i) => <li key={i}>{d}</li>)}
          {activeTab === "supplement-facts" &&
            product.keyFeatures?.map((k, i) => <li key={i}>{k}</li>)}
        </div>
      </div>
      <HowToMake />
    </>
  );
}
