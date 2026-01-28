import { NextFederationPlugin } from '@module-federation/nextjs-mf';

const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    const { isServer } = options;

    const remotes = {
      cardapio: `cardapio@http://localhost:3001/_next/static/${
        isServer ? 'ssr' : 'chunks'
      }/remoteEntry.js`,
      pedido: `pedido@http://localhost:3002/_next/static/${
        isServer ? 'ssr' : 'chunks'
      }/remoteEntry.js`,
    };

    config.plugins.push(
      new NextFederationPlugin({
        name: 'container',
        filename: 'static/chunks/remoteEntry.js', // ✅ ESSENCIAL
        remotes,
        shared: {
          react: { singleton: true, requiredVersion: false },
          'react-dom': { singleton: true, requiredVersion: false },
        },
      })
    );

    return config;
  },
};

export default nextConfig;
