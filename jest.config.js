module.exports = {
  collectCoverage: true,
  globals: {
    __PATH_PREFIX__: ``,
  },
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`
  },
  setupFiles: [`<rootDir>/loadershim.js`],
  testPathIgnorePatterns: [`node_modules`, `.cache`, `public`],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx)?$": `<rootDir>/jest-preprocess.js`,
  },
  transformIgnorePatterns: [`node_modules/(?!(gatsby|gatsby-script)/)`]
}