const common = [
  'tests/**/*.feature', // Specify our feature files
  '--require tests/**/*.js', // Load step definitions
  '--format progress-bar', // Load custom formatter
  '--format node_modules/cucumber-pretty', // Load custom formatter
].join(' ');

module.exports = {
  default: common,
};
