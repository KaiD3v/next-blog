import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.google.com'
      },
      {
        protocol: 'https',
        hostname: 'media.istockphoto.com'
      }
    ]
  }
};

const withMDX = createMDX({
  // markdown plugs
});

export default withMDX(nextConfig);
