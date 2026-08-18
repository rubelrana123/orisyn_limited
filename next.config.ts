import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/business/civil-construction",
        destination: "/business/civil-engineering",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
