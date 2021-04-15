module.exports = {
    globals: {
        URL: "https://demoqa.com/",
        HEADLESS: false,
        SLOWMO: 0
      },
    preset: 'jest-puppeteer',
    testMatch: ["**/?(*.)+(spec|test).[t]s"],
    testPathIgnorePatterns: ['/node_modules/', 'dist'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    transform: {
        "^.+\\.ts?$": "ts-jest"
    },
    globalSetup: './jest.global-setup.ts',
    globalTeardown: './jest.global-teardown.ts',
    verbose: true
};
