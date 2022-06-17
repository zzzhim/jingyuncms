/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  experimental: {
    concurrentFeatures: true,
    serverComponents: true,
  },

  future: {
    webpack5: true,
  },

}

module.exports = nextConfig
