require("dotenv").config();
const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    DATABASE_ID: process.env.DATABASE_ID,
    COLLECTION_ID: process.env.COLLECTION_ID,
    PROJECT_ID: process.env.PROJECT_ID,
    CLIENT_URL: process.env.CLIENT_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    minimumCacheTTL: 1500000,
  },
};

module.exports = withPWA(nextConfig);
