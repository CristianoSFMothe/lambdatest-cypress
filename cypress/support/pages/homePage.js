const element = require('../elements/homePage').homePage

Cypress.Commands.add('homePage', (text) => {
  cy.get(element.promotionalBanner).should('have.text', text)
})

Cypress.Commands.add('clickMenu', (menu) => {
  cy.get(element.navbar)
    .contains('span', menu)
    .should('be.visible')
    .click()
})
