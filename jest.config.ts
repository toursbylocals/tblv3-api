module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/node_modules/',
    '!src/config/*.ts',
    '!src/types/*.ts',
    '!src/db/*.ts',
    '!src/index.ts',
    '!src/schemas/*.ts',
    '!src/middleware/index.ts',
    '!src/middleware/rules.ts',
    '!src/resolvers/*.ts',
    '!src/loaders/*.ts',
    '!src/services/google.ts'
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  globals: {
    'ts-jest': {
      isolatedModules: true
    }
  },
  modulePathIgnorePatterns: ['<rootDir>/dist/', '<rootDir/node_modules/']
}
