/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/leovalestore',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
