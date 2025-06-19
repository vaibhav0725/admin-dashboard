import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output:"export",
  images: {
    domains: ["test.mayacode.io"],
  },
};

export default nextConfig;
