module.exports = {
  distDir: "build",
  exportPathMap() {
    return {
      "/": { page: "/" },
    };
  },
  assetPrefix: process.env.NODE_ENV === "production" ? "/c-hive.dev" : "", // https://github.com/zeit/next.js/wiki/Deploying-a-Next.js-app-into-GitHub-Pages#extra-step-for-project-page-sites
};
