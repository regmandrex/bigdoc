/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: '/modern', destination: '/', permanent: true },
      { source: '/modern/', destination: '/', permanent: true },
    ];
  },
  images: {
    qualities: [75, 92],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        pathname: '/**',
      },
    ],
    localPatterns: [
      { pathname: '/assets/**' },
    ],
  },
};

export default nextConfig;

