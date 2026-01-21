"use client";

import Image from "next/image";

export default function FeatureStrip() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-4 flex flex-wrap justify-between items-center gap-4">
      <Image
        src="/icons/easydigesting.webp"
        alt="easy-digesting"
        width={48}
        height={48}
        className="h-12 w-auto"
        loading="lazy"
      />

      <Image
        src="/icons/carbs.webp"
        alt="carbs"
        width={48}
        height={48}
        className="h-12 w-auto"
        loading="lazy"
      />

      <Image
        src="/icons/sugar.webp"
        alt="zero-sugar"
        width={48}
        height={48}
        className="h-12 w-auto"
        loading="lazy"
      />

      <Image
        src="/icons/lactose.webp"
        alt="lactose-free"
        width={48}
        height={48}
        className="h-12 w-auto"
        loading="lazy"
      />

      <Image
        src="/icons/dairyfree.webp"
        alt="dairy-free"
        width={48}
        height={48}
        className="h-12 w-auto"
        loading="lazy"
      />

      <Image
        src="/icons/instantmix.webp"
        alt="instant-mix"
        width={48}
        height={48}
        className="h-12 w-auto"
        loading="lazy"
      />
    </div>
  );
}
