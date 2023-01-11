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
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'sanity.io',
//         port: '',
//         pathname: '/images/**',
//       },
//     ],
//   },
// }
// http://localhost:3000/(https://cdn.sanity.io/images/169omu8q/production/b54450adce03e233d39e9eb0260ad8550775626f-512x512.png)