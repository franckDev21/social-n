/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // domains: ['*'],
    remotePatterns: [
    {
      protocol: 'https',
      hostname: '**.unsplash.com',
    },
    {
      protocol: 'https',
      hostname: '**.placeholder.com',
    },
    ],
  },
}

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV !== 'production'
});

module.exports = withPWA(nextConfig);
