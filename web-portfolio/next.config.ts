import type { NextConfig } from "next";

const basePathEnv = process.env.NEXT_PUBLIC_BASE_PATH;
const disableBasePath = process.env.NO_BASE_PATH === "true";
const basePath =
  !disableBasePath && basePathEnv
    ? `/${basePathEnv.replace(/^\//, "")}`
    : undefined;

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true,
  },
  productionBrowserSourceMaps: true,
};

export default nextConfig;
