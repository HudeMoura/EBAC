import { NextFederationPlugin } from '@module-federation/nextjs-mf';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, options) {
    const { isServer } = options;

    config.plugins.push(
      new NextFederationPlugin({
        name: 'pedido',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './Pedido': './src/components/Pedido.jsx',
        },
        shared: {
          react: {
            singleton: true,
            requiredVersion: false,
          },
          'react-dom': {
            singleton: true,
            requiredVersion: false,
          },
        },
      })
    );

    return config;
  },
  reactStrictMode: true,
};

export default nextConfig;

