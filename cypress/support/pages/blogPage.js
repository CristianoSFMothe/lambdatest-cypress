Cypress.Commands.add('blogPage', () => {
  cy.intercept('GET', '**/index.php?route=extension/maza/blog/home').as('loadBlogPage')
  cy.clickMenu('Blog')
  cy.wait('@loadBlogPage')

})

Cypress.Commands.add('titlePage', (title) => {
  cy.contains('h3', title).should('be.visible')
})

Cypress.Commands.add('clickCategoryName', (categoryName) => {
  cy.get('.list-group-item')
    .contains('a', categoryName)
    .should('be.visible')
    .click()
})

Cypress.Commands.add('clickBlogCategory', (categoryName) => {
  cy.intercept('GET', '**/index.php?route=extension/maza/blog/category**').as('getBlogCategory')

  cy.get('.list-group-item')
    .contains('a', categoryName)
    .should('be.visible')
    .click()

  cy.wait('@getBlogCategory')

  cy.get('h1').should('contain.text', categoryName)
})

Cypress.Commands.add('titleCategoryName', (title) => {
  cy.get('h1').should('have.text', title)
})

Cypress.Commands.add('getBlogArticleByTitle', (title) => {
  cy.get('h4.title')
    .contains(title)
    .should('be.visible')
})

