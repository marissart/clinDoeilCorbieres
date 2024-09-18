/** @type {import('next').NextConfig} */

const nextConfig = {
  
  reactStrictMode: true,
  images: {
     remotePatterns: [
    {
      protocol: "https",
      hostname: "**",
    },
  ],
    domains: [ '*'],
  },
  i18n: {
    locales: ["fr"],
    defaultLocale: "fr",
  },
};

module.exports =  nextConfig;