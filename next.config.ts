import type {NextConfig} from 'next';

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
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
  webpack: (config, { isServer }) => {
    // Handle handlebars require.extensions warning
    config.externals = [
      ...(config.externals || []),
      'handlebars'
    ];
    return config;
  },
  // Add Turbopack configuration
  turbopack: {
    rules: {
      // Configure externals for Turbopack similar to webpack
      external: ['handlebars']
    }
  }
};

export default nextConfig;
