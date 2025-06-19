import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output:"export",
  images: {
    unoptimized:true,
    domains: ["test.mayacode.io"],
  },
};

export default nextConfig;
