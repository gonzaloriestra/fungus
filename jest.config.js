module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  cacheDirectory: '.cache/jestCache',
  modulePathIgnorePatterns: ['dist/'],
  coveragePathIgnorePatterns: ['dist/', 'node_modules/'],
};
