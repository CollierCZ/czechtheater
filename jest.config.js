module.exports = {
  collectCoverage: true,
  globals: {
    __PATH_PREFIX__: ``,
  },
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    "^gatsby-page-utils/(.*)$": `gatsby-page-utils/dist/$1`, // Workaround for https://github.com/facebook/jest/issues/9771
  },
  snapshotSerializers: [`enzyme-to-json/serializer`],
  setupFiles: [`./src/setUpTests.js`,`<rootDir>/loadershim.js`],
  testPathIgnorePatterns: [`node_modules`, `.cache`, `public`],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx)?$": `<rootDir>/jest-preprocess.js`,
  },
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`]
}