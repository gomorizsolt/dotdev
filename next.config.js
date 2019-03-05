const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  distDir: 'build',
  assetPrefix: isProduction ? 'https://c-hive.gitlab.io/c-hive.dev/' : '',
};
