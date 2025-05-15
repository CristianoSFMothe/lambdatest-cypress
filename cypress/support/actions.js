function waitElement(el) {
  try {
    cy.get(el).and('be.visible')
  } catch (error) {
    cy.log('Exception caught: ' + error.message)
  }
  return waitElement
}

module.exports = { waitElement }
