module.exports = {
  distDir: "build",
  exportPathMap() {
    return {
      "/": { page: "/" },
    };
  },
  assetPrefix: "./",
  // https://github.com/zeit/next.js/issues/3141#issuecomment-364551848
  webpack(config) {
    config.module.rules.push({
      test: /\.ya?ml$/,
      use: "js-yaml-loader",
    });
    return config;
  },
};
