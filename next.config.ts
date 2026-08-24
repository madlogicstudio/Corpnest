import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
      remotePatterns: [
          {
              protocol: "https",
              hostname: "fakelogo.com",
          },
      ],
  },
};

export default nextConfig;
