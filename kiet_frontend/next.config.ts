import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    // Enable the Turbopack file system cache for faster development builds (compilation)
    turbopackFileSystemCacheForDev: true
  }  
};

export default nextConfig;
