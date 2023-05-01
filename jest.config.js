module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    setupFilesAfterEnv: ['./src/tests/setup.ts'],
    moduleNameMapper: {
      '^src/(.*)$': '<rootDir>/src/$1',
    },
    testPathIgnorePatterns: [
      "<rootDir>/build/"
    ]
  };