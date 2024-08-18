/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',  // Allow any path on this hostname
      },
      // Your other allowed hostnames (if any)
    ],
  },
};

export default nextConfig;
