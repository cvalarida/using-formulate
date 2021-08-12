const path = require("path");

module.exports = {
  reactStrictMode: true,
  target: "serverless",
  async rewrites() {
    return [
      // Rewrite everything to `pages/index`
      {
        source: "/:any",
        destination: "/",
      },
    ];
  },
  // Override the resolve.alias to include react and formik because Formulate
  // lists them as devDependencies as well, and when we use npm / yarn link to
  // link to the local version of formulate, we want to resolve to only one
  // version of these dependencies or things break.
  webpack: (config) => {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        react: path.resolve("./node_modules/react"),
        formik: path.resolve("./node_modules/formik"),
      },
    };
    return config;
  },
};
