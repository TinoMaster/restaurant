/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   images: {
      remotePatterns: [
         {
            protocol: 'https',
            hostname: 'lh3.googleusercontent.com',
         },
         {
            protocol: 'https',
            hostname: 'restaurant.s3.cubbit.eu',
         },
         {
            protocol: 'https',
            hostname: 's3.cubbit.eu',
         }
      ],
   },
}

module.exports = nextConfig
