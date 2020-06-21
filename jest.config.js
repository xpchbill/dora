module.exports = {
  rootDir: __dirname,
  testEnvironment: 'jsdom',
  setupFiles: ['react-app-polyfill/jsdom'],
  collectCoverageFrom: [
    "packages/app/src/**/*.{js,ts,tsx}",
    "!**/*.test.{js,ts,tsx}",
  ],
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$',
    '^.+\\.module\\.(css|less)$',
  ],
  moduleNameMapper: {
    '^.+\\.module\\.(css|less)$': 'identity-obj-proxy',
  },
  projects: ["<rootDir>/packages/*/jest*config.js"],
  setupFilesAfterEnv: [
    // "<rootDir>/jest.setup.js",
  ],
};