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
    BUCKET_ID: process.env.BUCKET_ID,
    NEXT_PUBLIC_DATABASE_ID: process.env.NEXT_PUBLIC_DATABASE_ID,
    NEXT_PUBLIC_COLLECTION_ID: process.env.NEXT_PUBLIC_COLLECTION_ID,
    NEXT_PUBLIC_PROJECT_ID: process.env.NEXT_PUBLIC_PROJECT_ID,
    NEXT_PUBLIC_CLIENT_URL: process.env.NEXT_PUBLIC_CLIENT_URL,
    NEXT_PUBLIC_BUCKET_ID: process.env.NEXT_PUBLIC_BUCKET_ID,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cloud.appwrite.io",
      },
    ],
    minimumCacheTTL: 1500000,
  },
};

module.exports = withPWA(nextConfig);
