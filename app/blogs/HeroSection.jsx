import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative h-[800px] w-full">
      <Image
        src="/Images/blogshero.webp"
        alt="Blogs"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
    </div>
  );
};

export default HeroSection;
