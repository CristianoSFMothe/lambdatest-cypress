const element = require('../support/elements/specialOffersPage').specialOffersPage

Cypress.Commands.add('message', (text) => {
  cy.get(element.message)
    .contains('p', text)
    .should('be.visible')
})
