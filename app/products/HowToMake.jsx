import Image from "next/image";
import { anton } from "../lib/fonts";

export default function HowToMake() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-10">
      {/* Heading */}
      <h2
        className={`${anton.className} text-3xl sm:text-4xl md:text-5xl font-extrabold color-text tracking-wide`}
      >
        HOW TO MAKE
      </h2>

      <p
        className={`${anton.className} mt-3 text-gray-700 text-base sm:text-lg md:text-xl max-w-2xl`}
      >
        Here is a clean and easy 4-step “How to Make” for Grainly Cream of Rice –
        Salted Caramel
      </p>

      {/* Cards Grid (NO SCROLL) */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
        {/* Step 1 */}
        <div className="bg-[#F7EFE7] hover:bg-orange-300 transition rounded-bl-[60px] sm:rounded-bl-[80px] px-6 py-8 min-h-[380px] shadow-sm border border-gray-300">
          <div className="flex justify-center mb-5">
            <Image
              src="/icons/icon1.png"
              alt="Add liquid"
              width={130}
              height={130}
              className="h-16 sm:h-20 md:h-24 w-auto"
            />
          </div>

          <p
            className={`${anton.className} text-center font-extrabold text-lg sm:text-xl mb-3`}
          >
            1 ADD LIQUID
          </p>

          <p className="text-gray-600 text-center text-sm leading-relaxed">
            Start by pouring 150–180ml of hot water or warm milk into a bowl or
            shaker. The temperature helps the cream of rice dissolve smoothly.
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-[#F7EFE7] hover:bg-orange-300 transition px-6 py-8 min-h-[380px] shadow-sm border border-gray-300">
          <div className="flex justify-center mb-5">
            <Image
              src="/icons/icon2.png"
              alt="Add scoop"
              width={130}
              height={130}
              className="h-16 sm:h-20 md:h-24 w-auto"
            />
          </div>

          <p
            className={`${anton.className} text-center font-extrabold text-lg sm:text-xl mb-3`}
          >
            2 ADD 1 SCOOP & MIX
          </p>

          <p className="text-black text-center text-sm leading-relaxed">
            Add 1 full scoop of Grainly Cream of Rice and stir or shake until
            smooth.
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-[#F7EFE7] hover:bg-orange-300 transition px-6 py-8 min-h-[380px] shadow-sm border border-gray-300">
          <div className="flex justify-center mb-5">
            <Image
              src="/icons/icon3.png"
              alt="Cook and stir"
              width={130}
              height={130}
              className="h-16 sm:h-20 md:h-24 w-auto"
            />
          </div>

          <p
            className={`${anton.className} text-center font-extrabold text-lg sm:text-xl mb-3`}
          >
            3 COOK & STIR
          </p>

          <p className="text-black text-center text-sm leading-relaxed">
            Let the mixture sit briefly and stir again to achieve a creamy
            texture.
          </p>
        </div>

        {/* Step 4 */}
        <div className="bg-[#F7EFE7] hover:bg-orange-300 transition rounded-tr-[60px] sm:rounded-tr-[80px] px-6 py-8 min-h-[380px] shadow-sm border border-gray-300">
          <div className="flex justify-center mb-5">
            <Image
              src="/icons/icon2.png"
              alt="Serve and enjoy"
              width={130}
              height={130}
              className="h-16 sm:h-20 md:h-24 w-auto"
            />
          </div>

          <p
            className={`${anton.className} text-center font-extrabold text-lg sm:text-xl mb-3`}
          >
            4 SERVE & ENJOY
          </p>

          <p className="text-gray-600 text-center text-sm leading-relaxed">
            Your Cream of Rice is ready. Enjoy the rich salted caramel flavour.
          </p>
        </div>
      </div>
    </div>
  );
}
