module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  cacheDirectory: '.cache/jestCache',
  coveragePathIgnorePatterns: ['dist/', 'node_modules/'],
};
