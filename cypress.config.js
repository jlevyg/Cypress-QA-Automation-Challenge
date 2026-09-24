const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com',
    specPattern: 'cypress/e2e/**/*.cy.js',
    excludeSpecPattern: ['cypress/e2e/quarantine/**/*.cy.js'],
    supportFile: 'cypress/support/e2e.js',
    fixturesFolder: 'cypress/fixtures',
    setupNodeEvents(on) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'artifacts/reports',
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true,
    reportPageTitle: 'DemoQA Cypress Results',
  },
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 60000,
  requestTimeout: 15000,
  retries: {
    runMode: 1,
    openMode: 0,
  },
  video: true,
  screenshotsFolder: 'artifacts/screenshots',
  videosFolder: 'artifacts/videos',
  viewportWidth: 1280,
  viewportHeight: 900,
  chromeWebSecurity: true,
});
