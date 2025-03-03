import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tailus.io'
      },
    {
        protocol: 'https',
        hostname: 'gravatar.com'
      },
    ]
  }
};

export default nextConfig;
