import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "trademe.tmcdn.co.nz" },
      { protocol: "https", hostname: "*.trademe.co.nz" },
    ],
  },
};

export default nextConfig;
