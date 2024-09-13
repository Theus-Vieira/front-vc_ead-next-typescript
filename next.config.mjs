/** @type {import('next').NextConfig} */
import "dotenv/config";

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  env: {
    APP_ID: process.env.APP_ID,
    API_KEY: process.env.API_KEY,
    MASTER_KEY: process.env.MASTER_KEY,
  },
};

export default nextConfig;
