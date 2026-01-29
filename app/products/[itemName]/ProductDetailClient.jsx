"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiPlus, FiMinus } from "react-icons/fi";
import { useCart } from "../../context/CartContext";
import { AiFillStar } from "react-icons/ai";
import HowToMake from "../HowToMake";
import { anton } from "../../lib/fonts";

export default function ProductDetailClient({ products = [], itemName }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  const { addToCart } = useCart();

  const product = useMemo(() => {
    if (!itemName || !products.length) return null;
    return products.find(
      (p) => p.itemName?.toLowerCase() === itemName.toLowerCase()
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

  const handleBuyNow = () => {
    addToCart(product, qty);
  };

  const tabs = [
    { id: "description", label: "DESCRIPTION" },
    { id: "key-benefits", label: "KEY BENEFITS" },
    { id: "why-choose", label: "WHY CHOOSE" },
    { id: "supplement-facts", label: "SUPPLEMENT FACTS" },
  ];

  return (
    <>
      {/* Main Section */}
      <div className="max-w-7xl mx-auto p-4 sm:p-6 mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Images */}
        <div className="w-full">
          <div className="bg-gray-100 rounded-2xl p-3 flex items-center justify-center">
            {selectedImage && (
              <Image
                src={selectedImage}
                alt={product.flavour}
                width={600}
                height={600}
                priority
                className="w-full max-h-[500px] sm:max-h-[580px] object-contain rounded-2xl"
              />
            )}
          </div>

          {/* Thumbnails */}
          <div className="mt-4 flex gap-2 overflow-x-auto">
            {product?.images?.length > 0 ? (
              product.images.map((img, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setSelectedImage(img)}
                  className={`flex-shrink-0 border rounded-xl p-1 cursor-pointer transition
                  ${
                    selectedImage === img
                      ? "border-black"
                      : "border-gray-300 hover:border-gray-500"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Grainly-creame-of-rice-${index}`}
                    className="w-20 h-20 sm:w-24 sm:h-24 object-contain rounded-lg"
                  />
                </div>
              ))
            ) : (
              <p className="text-gray-400 text-sm col-span-4 text-center">
                No additional images available
              </p>
            )}
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-start mx-2 sm:mx-6">
          <h1 className={`${anton.className} text-4xl sm:text-3xl md:text-5xl font-bold text-orange-800`}>
            {product.flavour}
          </h1>

          <div className="flex mt-2 text-xl sm:text-2xl">
            {[...Array(5)].map((_, i) => (
              <AiFillStar key={i} className="text-orange-500" />
            ))}
          </div>

          {/* TAGS */}
          <div className="flex flex-wrap gap-2 mt-3">
            {product?.tags?.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs sm:text-sm font-medium text-orange-700 bg-orange-100 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Diet & Serving */}
          <div className="flex flex-col sm:flex-row justify-between gap-2 mt-3">
            <div className="flex items-center gap-2">
              <span className={`${anton.className} text-sm sm:text-xl`}>Diet-Type:</span>
              <p className="anton-regular text-gray-800 text-sm sm:text-xl">Vegetarian</p>
            </div>

            <div className="flex items-center gap-2">
              <span className={`${anton.className} text-sm sm:text-xl`}>Serving:</span>
              <p className="anton-regular text-gray-800 text-sm sm:text-xl">65</p>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2 mt-2">
            <span className={`${anton.className} text-xl sm:text-2xl`}>PRICE:</span>
            <p className="text-red-500 font-bold text-xl sm:text-2xl">
              ₹{product?.discountPrice}/-
            </p>
          </div>

          {/* Flavours */}
          <div className="mt-6">
            <p className={`${anton.className} font-semibold text-2xl sm:text-4xl mb-3`}>
              FLAVOURS
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {products.map(({ _id, flavour, itemName }) => (
                <Link
                  key={_id}
                  href={`/products/${itemName}`}
                  className={`px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition
                  ${
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

          <p className="mt-4 text-gray-600 text-sm sm:text-base">{product.shortDescription}</p>

          {/* Qty + Buy */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <div className="flex items-center border rounded-full px-3 py-2">
              <button onClick={() => qty > 1 && setQty(qty - 1)}>
                <FiMinus />
              </button>
              <span className="px-4 sm:px-6">{qty}</span>
              <button onClick={() => setQty(qty + 1)}>
                <FiPlus />
              </button>
            </div>

            <button
              onClick={handleBuyNow}
              className="bg-black cursor-pointer text-white px-10 sm:px-12 py-2 sm:py-3 rounded-lg font-bold w-full sm:w-auto text-center"
            >
              BUY NOW
            </button>
          </div>
        </div>
      </div>

      {/* TABS */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className={`${anton.className} flex gap-4 sm:gap-6 border-b overflow-x-auto`}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`text-lg sm:text-2xl pb-2 whitespace-nowrap cursor-pointer ${
                activeTab === tab.id
                  ? "text-orange-500 border-b-2 border-orange-500"
                  : ""
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-4 sm:mt-6 text-gray-600 text-sm sm:text-lg">
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
