/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    path: "/public/"
  },
  generateEtags: false
}

module.exports = nextConfig
