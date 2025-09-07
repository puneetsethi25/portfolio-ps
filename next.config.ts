import type { NextConfig } from 'next';

// next.config.js
const isProd = process.env.NODE_ENV === 'production';
const repoName = '/portfolio-ps'; // <-- change this (for project pages)

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.ginvoicing.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'mma.prnewswire.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'bitpinas.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  output: 'export',             // <-- key: produce /out
  trailingSlash: true,          // <-- creates folder/index.html so GH Pages finds routes
  // For user/org pages (username.github.io) leave these empty.
  basePath: isProd ? `/${repoName}` : '/portfolio-ps',
  assetPrefix: isProd ? `/${repoName}/` : '/portfolio-ps'
};

export default nextConfig;
