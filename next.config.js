/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images: {
    domains: [
      "static.wikia.nocookie.net",
      "lh3.googleusercontent.com",
      "upload.wikimedia.org",
      "cdn.imgbin.com",
      "www.clipartmax.com",
      "images.asos-media.com",
      "content.asos-media.com",
      "images.asos-media.com/products/reclaimed-vintage-unisex-oversized-blazer-in-check-with-fur-trim-part-of-a-set/203439085-1-multi",
    ],
  },
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer(nextConfig);
