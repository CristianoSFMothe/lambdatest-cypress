describe('Home Page', () => {
  it('should open on the home page', () => {
    cy.visit('/')

    cy.homePage('Upto 50% Off on Fully Automatic Top Load Washing Machine')
  })
})
