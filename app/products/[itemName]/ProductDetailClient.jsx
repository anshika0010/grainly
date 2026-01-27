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

  {
    /* Modal Overlay */
  }
  {
    open && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
        {/* Modal Box */}
        <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-6 text-center relative">
          {/* Close Button */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-xl"
          >
            ×
          </button>

          <h2 className="text-2xl anton-regular font-bold text-gray-800 mb-4">
            Coming Soon!
          </h2>

          <p className="text-gray-600 mb-4">
            Thank you for your interest in our product. We’re currently working
            on this feature, and it will be available very soon.
          </p>

          <p className="text-gray-600">
            For more information, please contact us at
            <br />
            <a
              href="mailto:info@grainly.com"
              className="text-orange-600 font-semibold hover:underline"
            >
              info@grainly-foods.com
            </a>
          </p>

          <button
            onClick={() => setOpen(false)}
            className="mt-6 bg-gray-800 text-white px-5 py-2 rounded-lg hover:bg-gray-900 transition"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Modal Overlay */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          {/* Modal Box */}
          <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-6 text-center relative">
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-xl"
            >
              ×
            </button>

            <h2 className="text-2xl anton-regular font-bold text-gray-800 mb-4">
              Coming Soon!
            </h2>

            <p className="text-gray-600 mb-4">
              Thank you for your interest in our product. We’re currently
              working on this feature, and it will be available very soon.
            </p>

            <p className="text-gray-600">
              For more information, please contact us at
              <br />
              <a
                href="mailto:info@grainly.com"
                className="text-orange-600 font-semibold hover:underline"
              >
                info@grainly-foods.com
              </a>
            </p>

            <button
              onClick={() => setOpen(false)}
              className="mt-6 bg-gray-800 text-white px-5 py-2 rounded-lg hover:bg-gray-900 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
      <div className="max-w-7xl mx-auto p-6 grid md:grid-cols-2 gap-10 mt-20">
        <div className="w-full">
          {/* Main Image */}
          <div className="bg-gray-100 rounded-2xl p-4 flex items-center justify-center">
            {selectedImage && (
              <Image
                src={selectedImage}
                alt={product.flavour}
                width={600}
                height={600}
                priority
                className="w-full max-h-[580px] object-contain rounded-2xl"
              />
            )}
          </div>

          {/* Thumbnails */}
          <div className="mt-4 grid grid-cols-4 gap-3">
            {product?.images?.length > 0 ? (
              product.images.map((img, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setSelectedImage(img)}
                  className={`border rounded-xl p-1 cursor-pointer transition
            ${
              selectedImage === img
                ? "border-black"
                : "border-gray-300 hover:border-gray-500"
            }`}
                >
                  <img
                    src={img}
                    alt={`Grainly-creame-of-rice-${index}`}
                    className="w-full h-32 object-contain rounded-lg"
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
