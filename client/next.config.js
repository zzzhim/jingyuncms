const intercept = require("intercept-stdout")

// safely ignore recoil stdout warning messages
function interceptStdout(text) {
  if (text.includes('Duplicate atom key')) {
    return ''
  }
  return text
}

intercept(interceptStdout)

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  experimental: {
    concurrentFeatures: true,
    serverComponents: true,
    newNextLinkBehavior: true // Link 生成 a 标签
  },

  future: {
    webpack5: true,
  },
}

module.exports = nextConfig
