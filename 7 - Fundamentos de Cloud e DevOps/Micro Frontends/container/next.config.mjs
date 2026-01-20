import { NextFederationPlugin } from '@module-federation/nextjs-mf';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, options) {
    const { isServer } = options;

    const remotes = {
      cardapio: `cardapio@http://localhost:3001/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
      pedido: `pedido@http://localhost:3002/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
    };


    config.plugins.push(
      new NextFederationPlugin({
        name: 'container',
        filename: 'static/chunks/remoteEntry.js',
        remotes,
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
