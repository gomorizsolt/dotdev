const withSourceMaps = require('@zeit/next-source-maps')();

module.exports = withSourceMaps({
  distDir: 'build',
  exportPathMap() {
    return {
      '/': { page: '/' },
    };
  },
  webpack(config) {
    return config;
  },
});
