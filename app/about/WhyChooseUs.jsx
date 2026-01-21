'use client';
export default function WhyChooseUs() {
  return (
    <div className="w-full py-16">
      <div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 bg-orange-500"
        style={{
          backgroundImage: "url('/girl.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* LEFT SECTION - Vertical Text */}
        <div className="flex items-center justify-center md:col-span-1 h-full py-10">
          <h2 className="text-6xl md:text-7xl font-extrabold anton-regular text-white tracking-wider rotate-180 writing-vertical">
            WHY CHOOSE US
          </h2>
        </div>

        {/* RIGHT SECTION */}
        <div
          className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 border border-white/40"
          style={{
            backgroundImage: "url('/Images/girl.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backdropFilter: "blur(6px)",
          }}
        >
          {/* Box 1 */}
          <div className="p-8 border border-white/30 text-white">
            <h4 className="text-xl anton-regular">
              Clean & High-Quality Ingredients
            </h4>
            <p className="mt-6 text-md leading-relaxed opacity-90">
              We use only premium, easily digestible ingredients that deliver
              reliable energy without unnecessary fillers or harsh additives.
            </p>
          </div>

          {/* Box 2 */}
          <div className="p-8 border border-white/30 text-white">
            <h4 className="text-xl anton-regular">
              Fast-Digesting, Easy on the Stomach
            </h4>
            <p className="mt-6 text-md leading-relaxed opacity-90">
              Our products are crafted to absorb quickly, providing smooth
              digestion and steady performance—perfect for pre- or post-workout
              nutrition.
            </p>
          </div>

          {/* Box 3 */}
          <div className="p-8 border border-white/30 text-white">
            <h4 className="text-xl anton-regular">Consistent Energy Boost</h4>
            <p className="mt-6 text-md leading-relaxed opacity-90">
              With every serving, Grainly fuels your body with clean carbs that
              support endurance, strength, and recovery throughout the day.
            </p>
          </div>

          {/* Box 4 */}
          <div className="p-8 border border-white/30 text-white">
            <h4 className="text-xl anton-regular">
              Delicious, Dessert-Like Flavours
            </h4>
            <p className="mt-6 text-md leading-relaxed opacity-90">
              We combine performance nutrition with rich, enjoyable flavours
              like Salted Caramel—making healthy eating something you actually
              look forward to.
            </p>
          </div>
        </div>
      </div>

      {/* Vertical text CSS */}
      <style jsx>{`
        .writing-vertical {
          writing-mode: vertical-rl;
        }
      `}</style>
    </div>
  );
}
