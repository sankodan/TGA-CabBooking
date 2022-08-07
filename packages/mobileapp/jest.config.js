module.exports = {
  preset: 'react-native',
  testPathIgnorePatterns: ['./../../node_modules/', './node_modules'],
  coverageDirectory: './coverage/',
  coverageReporters: ['html', 'cobertura', 'lcov'],
  collectCoverage: true,
  collectCoverageFrom: ['**/src/**/*.{js,jsx}'],
  setupFilesAfterEnv: ['./jest-setup-after-env.js'],
  transformIgnorePatterns: [
    './../../node_modules/(?!(@sankodan/*|@react-native|react-native|react-native-*|@react-navigation/*|react-native-elements|react-native-gesture-handler|react-native-paper|react-native-reanimated|react-native-safe-area-context|react-native-vector-icons|react-native-size-matters)/)',
  ],
};
