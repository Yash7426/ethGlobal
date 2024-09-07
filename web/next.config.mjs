/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "images.unsplash.com",
        },
        {
          protocol: "https",
          hostname: "assets.aceternity.com",
        },
        {
          protocol: "https",
          hostname: "www.google.com",
        },
        {
          protocol: "https",
          hostname: "w7.pngwing.com",
        },
        {
          protocol: "https",
          hostname: "freelogopng.com",
        }
      ],
    },
  }
  ;

export default nextConfig;
