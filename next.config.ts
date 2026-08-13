import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/caresync-web",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;