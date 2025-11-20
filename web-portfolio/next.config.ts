import type { NextConfig } from "next";

const repoFromGithub =
  process.env.GITHUB_ACTIONS && process.env.GITHUB_REPOSITORY
    ? process.env.GITHUB_REPOSITORY.split("/")[1]
    : undefined;

const repoBase = process.env.NEXT_PUBLIC_BASE_PATH || repoFromGithub;
const basePath = repoBase ? `/${repoBase}` : undefined;

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
