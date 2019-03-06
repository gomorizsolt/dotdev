// https://github.com/zeit/next-plugins/issues/309#issuecomment-432004655
/* const withSourceMaps = require('@zeit/next-source-maps')();

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
}); */

module.exports = {
  distDir: 'build',
  exportPathMap() {
    return {
      '/': { page: '/' },
    };
  },
};
