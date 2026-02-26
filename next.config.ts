import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // unoptimized: let .jfif and other non-standard formats pass through as-is
    unoptimized: true,
  },
};

export default nextConfig;
