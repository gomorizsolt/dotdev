const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  distDir: 'build',
  assetPrefix: isProduction ? '/{c-hive.dev}' : '',
};
