// jest.config.js
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './', // path to your Next.js app
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '\\.(css|scss|sass)$': 'identity-obj-proxy',
  },
};

module.exports = createJestConfig(customJestConfig);
