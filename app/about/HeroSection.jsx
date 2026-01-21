import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="w-full">
      <Image
        src="/Images/about.webp"
        alt="Grainly cream of rice"
        width={1920}
        height={700}
        priority
        className="w-full h-[700px] object-cover"
      />
    </div>
  );
};

export default HeroSection;
