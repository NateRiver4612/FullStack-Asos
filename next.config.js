/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "static.wikia.nocookie.net",
      "lh3.googleusercontent.com",
      "upload.wikimedia.org",
      "cdn.imgbin.com",
      "www.clipartmax.com",
      "images.asos-media.com",
      "content.asos-media.com",
    ],
  },
};

module.exports = nextConfig;
