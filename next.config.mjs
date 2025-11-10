/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  images: {
    domains: ["mems.iiti.ac.in", "another-domain.com"], // add any external hosts you use
  },
}

export default nextConfig
