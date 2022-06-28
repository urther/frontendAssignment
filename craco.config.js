// craco.config.js
const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@styles": path.resolve(__dirname, "src/styles/"),
    },
  },
  jest: {
    configure: {
      moduleNameMapper: {
        "^@(.*)$": "<rootDir>/src$1",
      },
    },
  },
};
