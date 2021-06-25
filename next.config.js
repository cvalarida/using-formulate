const withTM = require("next-transpile-modules")(["formulate"], {
  resolveSymlinks: false,
});

module.exports = withTM({
  reactStrictMode: true,
});
