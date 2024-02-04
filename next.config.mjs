/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "sweet-apple-acres.netlify.app",
      },
    ],
  },
};

export default nextConfig;
