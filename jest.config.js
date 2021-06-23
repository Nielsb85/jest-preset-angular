const reporters = ['default'];

// if running in Gitlab CI env, add Jest JUnit to reporters field
if (process.env.CI) {
  reporters.push([
    'jest-junit',
    {
      outputName: './jest-junit.xml',
    },
  ]);
}

const moduleNameMapper = {
  '^@app/environments/(.*)': '<rootDir>/src/environments/$1',
  '^@app/(.*)$': '<rootDir>/src/app/$1',
};

const collectCoverageFrom = [
  '<rootDir>/src/app/**/*.{js,ts}',
  // Exclude non-relevant Angular files
  '!<rootDir>/src/app/**/*{routing,module}.{js,ts}',
  // Exclude barrel files
  '!<rootDir>/src/app/**/index.ts',
  '!**/node_modules/**',
  '!**/vendor/**',
  '!**/generated/**',
];

const testPathIgnorePatterns = ['<rootDir>/src/test.ts'];

module.exports = {
  testRunner: 'jest-jasmine2',
  testEnvironment: 'jsdom',
  preset: 'jest-preset-angular',
  collectCoverageFrom,
  coverageReporters: ['html', 'text-summary', ['cobertura', { file: '../cobertura-coverage.xml' }]],
  cacheDirectory: '<rootDir>/node_modules/.cache/jest',
  reporters,
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  moduleNameMapper,
  testPathIgnorePatterns,
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
};
