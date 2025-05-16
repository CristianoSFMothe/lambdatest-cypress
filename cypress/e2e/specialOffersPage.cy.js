describe('Special Offers Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should open on the special offers page', () => {
    cy.clickMenu('Special')
    cy.message('There are no special offer products to list.')
  })
})
