import { NextFederationPlugin } from '@module-federation/nextjs-mf';

const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'cardapio',
        filename: 'static/chunks/remoteEntry.js', // ✅ obrigatório
        exposes: {
          './App': './src/RemoteApp.jsx',
        },
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

