// @zeit/next-source-maps: https://github.com/zeit/next-plugins/issues/309#issuecomment-432004655

module.exports = {
  distDir: 'build',
  exportPathMap() {
    return {
      '/': { page: '/' },
    };
  },
};
