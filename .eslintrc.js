module.exports = {
  env: {
    browser: true
  },
  extends: ["airbnb", "plugin:prettier/recommended"],
  plugins: ["react"],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/prop-types": 0,
    "react/sort-comp": "off", // https://github.com/yannickcr/eslint-plugin-react/issues/1214
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "import/prefer-default-export": 0, // https://stackoverflow.com/q/54245654/2771889
    "linebreak-style": ["error", process.platform === "win32" ? "windows" : "unix"], // // https://stackoverflow.com/q/39114446/2771889
    "import/prefer-default-export": 0,
  },
};
