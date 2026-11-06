import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [{
      source: "/:path*",
      has: [{ type: "host", value: "odevimedestek.com" }],
      destination: "https://www.odevimedestek.com/:path*",
      permanent: true,
    }];
  },
};

export default nextConfig;
