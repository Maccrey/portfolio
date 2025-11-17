import type { NextConfig } from "next";

const repoBase = process.env.NEXT_PUBLIC_BASE_PATH;
const basePath = repoBase ? `/${repoBase}` : undefined;

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true,
  },
  productionBrowserSourceMaps: true,
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
