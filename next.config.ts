import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 100 is used for the logo so it isn't re-compressed into a blurry WebP
    qualities: [75, 100],
  },
};

export default nextConfig;
