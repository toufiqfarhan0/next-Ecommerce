/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "files.stripe.com",
        port: "",
        pathname: "/**",
      },
      // Your other allowed hostnames (if any)
    ],
  },
};

export default nextConfig;
