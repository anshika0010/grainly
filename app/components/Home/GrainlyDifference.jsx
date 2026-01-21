'use client';
export default function GrainlyDifference() {
  return (
    <section className="w-full bg-white py-12 md:py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="w-full h-full bg-[url('/bg-swoosh.png')] bg-cover bg-center"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-gray-300 anton-regular">
            THE GRAINLY DIFFERENCE:
          </h2>
          <p className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#dd7c3c] anton-regular mt-3">
            NOT YOUR AVERAGE CREAM OF RICE
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* LEFT */}
          <div className="flex flex-col gap-6 items-center lg:items-end">
            {[
              {
                title: "UNBELIEVABLY QUICK",
                text: "No cooking required. Just pour hot water, stir and allow the bowl to thicken in a single minute. The fine milling process gives every serving a silky feel that sets perfectly without clumps.",
              },
              {
                title: "ZERO SUGAR, ALL FLAVOUR",
                text: "Each flavour is crafted with natural style sweet tones that taste indulgent while containing no added sugar. This makes Grainly suitable for weight management and balanced energy release.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-xl p-5 w-full sm:w-80
                shadow-lg shadow-orange-300/40 ring-1 ring-orange-300/30"
              >
                <h5 className="font-bold text-xl sm:text-2xl text-gray-800 anton-regular">
                  {item.title}
                </h5>
                <p className="text-sm text-gray-600 mt-2">{item.text}</p>
              </div>
            ))}
          </div>

          {/* CENTER IMAGE */}
          <div className="flex justify-center">
            <img
              src="/Images/bowl.webp"
              alt="Cream of Rice Bowl"
              className="w-[260px] sm:w-[380px] md:w-[480px] lg:w-[520px]"
            />
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-6 items-center lg:items-start">
            {[
              {
                title: "SMART CARBOHYDRATES",
                text: "Every thirty five gram scoop contains roughly twenty five grams of quality rice carbohydrates for steady energy. Ideal for workouts and long workdays.",
              },
              {
                title: "A WORLD OF TASTE",
                text: "Explore flavours inspired by desserts and global favourites like Tiramisu, Firni, Peach & Cream and many more.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-xl p-5 w-full sm:w-80
                shadow-lg shadow-orange-300/40 ring-1 ring-orange-300/30"
              >
                <h4 className="font-bold text-xl sm:text-2xl text-gray-800 anton-regular">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600 mt-2">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-12 md:mt-20">
          <button className="px-8 sm:px-12 py-3 bg-[#dd7c3c] text-white text-base sm:text-lg font-semibold rounded-full hover:bg-orange-600 transition">
            Ready In 60 Seconds. Delicious For Life
          </button>
        </div>
      </div>
    </section>
  );
}
