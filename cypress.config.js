const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://staging.lpitko.ru",
    setupNodeEvents(on, config) {
      //hgfgh
    },
  },
});
