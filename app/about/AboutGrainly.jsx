import Image from "next/image";
import { anton } from "../lib/fonts";
export default function AboutGrainly() {
  return (
    <div className="w-full bg-white px-6 md:px-16 py-16">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* TOP CONTENT */}
        <div className="text-center max-w-3xl mx-auto">
          <h1
            className={`${anton.className} text-6xl md:text-7xl font-extrabold  text-gray-600 tracking-wide`}
          >
            ABOUT <span className="text-gray-600">GRAINLY</span>
          </h1>

          <p
            className={`${anton.className} mt-4 text-gray-800 leading-relaxed text-start text-xl `}
          >
            People searching for cream of rice often look for ease of digestion,
            nutrition clarity, instant preparation, and better taste. Grainly
            addresses all of these needs in a single product. Unlike traditional
            cream of rice cereals that require cooking and have limited flavour
            options, Grainly is designed for modern lifestyles. It mixes
            instantly, offers a smooth texture, and comes in a wide range of
            flavours so daily consumption does not feel repetitive.
          </p>
        </div>

        {/* IMAGE + TEXT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          {/* Image Left */}
          <div className="flex justify-center md:justify-start">
            <Image
              src="/Images/about2.webp"
              alt="About Grainly"
              width={600}
              height={600}
              className="w-[80%] md:w-full object-contain rounded-xl"
            />
          </div>

          {/* Text Right */}
          <div>
            <h5
              className={`${anton.className} text-6xl md:text-7xl font-extrabold  text-gray-600 tracking-wide`}
            >
              OUR <span className={`{anton.className}`}>MISSION</span>
            </h5>

            <p
              className={`${anton.className} mt-4 text-gray-800 text-xl  leading-relaxed`}
            >
              Grainly focuses on food quality rather than supplement
              positioning. It provides carbohydrates from rice in a form that is
              practical, consistent, and easy to include in everyday routines.
              This makes Grainly suitable for people searching for the best
              cream of rice, instant cream of rice, gluten free breakfast
              cereal, and carbohydrate rich meals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
