/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
    minimumCacheTTL: 1500000,
  },
}

module.exports = nextConfig

// module.exports = {
//   images: {
//     loader: 'custom',
//     loaderFile: './my/image/loader.js',
//   },
// }