module.exports = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.scss$': 'identity-obj-proxy',
  },
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
};
