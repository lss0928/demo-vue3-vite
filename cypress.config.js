// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//     baseUrl: 'http://127.0.0.1:5173/#/',
//   },
// });

const { defineConfig } = require('cypress');

module.exports = defineConfig({
    taskTimeout: 180000,
    pageLoadTimeout: 120000,
    defaultCommandTimeout: 10000,
    requestTimeout: 16000,
    responseTimeout: 16000,
    viewportWidth: 1024,
    viewportHeight: 768,
    video: true,
    failOnStatusCode: false,
    watchForFilesChanges: true,
    numTestsKeptInMemory: 30,
    videoCompression: 40,
    videoUploadOnPasses: false,
    blockHosts: [
        // 'sp.fxiaoke.com',
        // 'sas.fxiaoke.com',
        // 'webpush.fxiaoke.com',
        // 'comet.fxiaoke.com',
        // 'comet.ceshi112.com',
        // 'webpush.ceshi112.com',
    ],
    // integrationFolder:'cypress/e2e',
    projectId: 'cypress-sfa',
    env: {
        allureResultsPath: 'allure-results',
        CYPRESS_API_URL: 'http://172.31.101.19:31234'
    },
    e2e: {
        // We've imported your old cypress plugins here.
        // You may want to clean this up later by importing these.
        setupNodeEvents(on, config) {
            //   return require('./cypress/plugins/index.js')(on, config)
        },
        baseUrl: 'http://127.0.0.1:5173',
        // baseUrl: 'https://www.ceshi112.com',
        specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}'
    }
});
