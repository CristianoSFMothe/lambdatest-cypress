const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // setupNodeEvents(on, config) {
    // implement node event listeners here
    // },
    baseUrl: 'https://ecommerce-playground.lambdatest.io/',
    viewportWidth: 1920,
    viewportHeight: 1080,
  },

})
