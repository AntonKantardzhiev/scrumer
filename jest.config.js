/** @type {import('ts-jest').JestConfigWithTsJest} */
const nextJest = require('next/jest');
// module.exports = {
//   preset: 'ts-jest',
//   testEnvironment: 'node',
//   globals: {
//     'ts-jest': {
//       tsconfig: './tsconfig.test.json',
//     },
//   },
// };
const createJestConfig = nextJest({ dir: './' });

const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
};

module.exports = createJestConfig(customJestConfig);
