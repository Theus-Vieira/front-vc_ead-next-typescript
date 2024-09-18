const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
});

module.exports = withPWA({
  compiler: {
    styledComponents: true,
  },
  env: {
    APP_ID: process.env.APP_ID,
    API_KEY: process.env.API_KEY,
    MASTER_KEY: process.env.MASTER_KEY,
  },
});
