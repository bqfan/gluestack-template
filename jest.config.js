module.exports = {
    preset: 'jest-expo',
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    },
    transformIgnorePatterns: [
      `node_modules/(?!(?:.pnpm/)?((jest-)?react-native|@react-native(-community)?|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|@sentry/.*|native-base|react-native-svg))`,
    ],
    setupFilesAfterEnv: [
      '@testing-library/react-native/extend-expect',
      './jest-setup.ts'
    ],
    testMatch: ['**/?(*.)+(spec|test).ts?(x)'],
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
    },
    collectCoverageFrom: [
      'src/**/*.{ts,tsx}',
      '!**/coverage/**',
      '!**/node_modules/**',
      '!**/babel.config.js',
      '!**/jest.setup.js',
      '!**/docs/**',
      '!**/cli/**',
    ],
    moduleFileExtensions: ['js', 'ts', 'tsx'],
    coverageReporters: ['json-summary', ['text', { file: 'coverage.txt' }]],
    reporters: [
      'default',
      ['github-actions', { silent: false }],
      'summary',
      [
        'jest-junit',
        {
          outputDirectory: 'coverage',
          outputName: 'jest-junit.xml',
          ancestorSeparator: ' › ',
          uniqueOutputName: 'false',
          suiteNameTemplate: '{filepath}',
          classNameTemplate: '{classname}',
          titleTemplate: '{title}',
        },
      ],
    ],
    coverageDirectory: '<rootDir>/coverage/',
  };
  