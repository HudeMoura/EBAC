import { NextFederationPlugin } from '@module-federation/nextjs-mf';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, options) {
    const { isServer } = options;

    config.plugins.push(
      new NextFederationPlugin({
        name: 'cardapio',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './Cardapio': './src/components/Cardapio.jsx',
        },
        shared: {
          react: { singleton: true, requiredVersion: false },
          'react-dom': { singleton: true, requiredVersion: false },
          'react/jsx-runtime': { singleton: true, requiredVersion: false },
        },
      })
    );

    return config;
  },
  reactStrictMode: true,
};

export default nextConfig;

