/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN:
      process.env.NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN,
    NEXT_PUBLIC_BURNER_USERNAME: process.env.NEXT_PUBLIC_BURNER_USERNAME,
    NEXT_PUBLIC_BURNER_PASSWORD: process.env.NEXT_PUBLIC_BURNER_PASSWORD,
  },
};

module.exports = nextConfig;
