import { NextFederationPlugin } from '@module-federation/nextjs-mf';

const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'pedido',
        filename: 'static/chunks/remoteEntry.js', // ✅ obrigatório
        exposes: {
          './App': './src/RemoteApp.jsx',
        },
        shared: {
          react: { singleton: true, requiredVersion: false, eager: true },
          'react-dom': { singleton: true, requiredVersion: false, eager: true },
        },
      })
    );

    return config;
  },
};

export default nextConfig;
