const element = require('../support/elements/homePage').homePage

Cypress.Commands.add('homePage', (text) => {
  cy.get(element.promotionalBanner).should('have.text', text)
})
