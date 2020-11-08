module.exports = {
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  roots: ['<rootDir>/src'],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx}',
    '<rootDir>/src/**/*.{spec,test}.{js,jsx}',
  ],
  moduleNameMapper: {
    "\\.(scss|less|css)$": "identity-obj-proxy"
  }
};
