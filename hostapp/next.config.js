const { withFederatedSidecar } = require("@module-federation/nextjs-mf");

module.exports = withFederatedSidecar({
  name: "hostapp",
  filename: "static/chunks/remoteEntry.js",
  exposes: {
    "./hostStore": "./src/redux/store/index",
    "./pokemonList": "./src/pages/pokemon/index.tsx",
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

    return config;
  },
});
