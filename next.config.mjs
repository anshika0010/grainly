/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.grainly-foods.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
