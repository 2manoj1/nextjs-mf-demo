const { withFederatedSidecar } = require("@module-federation/nextjs-mf");
module.exports = withFederatedSidecar({
  name: "remoteapp",
  filename: "static/chunks/remoteEntry.js",
  remotes: {
    hostapp: "hostapp@http://localhost:3000/_next/static/chunks/remoteEntry.js",
  },
  shared: {
    react: {
      // Notice shared are NOT eager here.
      requiredVersion: false,
      singleton: true,
    },
  },
})({
  webpack5: true,
  webpack(config, options) {
    const { webpack, isServer } = options;
    config.experiments = { topLevelAwait: true };

    config.module.rules.push({
      test: /_app.tsx/,
      loader: "@module-federation/nextjs-mf/lib/federation-loader.js",
    });

    config.plugins.push(
      new webpack.container.ModuleFederationPlugin({
        remotes: {
          hostapp:
            "hostapp@http://localhost:3000/_next/static/chunks/remoteEntry.js",
        },
        shared: {
          react: {
            singleton: true,
            eager: true,
            requiredVersion: false,
          },
        },
      })
    );
    return config;
  },
});
