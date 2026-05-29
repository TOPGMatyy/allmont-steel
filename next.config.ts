import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/allmont-steel",
  assetPrefix: "/allmont-steel/",
  images: { unoptimized: true },
};

export default nextConfig;
