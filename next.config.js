/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "picsum.photos",
      "randomuser.me",
      "pbs.twimg.com",
      "wall-questing-assets.s3.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
