describe('Blog Page', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.blogPage()
  })

  it('should open on the blog page', () => {
    cy.titlePage('Latest Articles')
  })

  context('Menu categories session', () => {
    it('should open on the Business category page', () => {
      cy.clickBlogCategory('Business')

      cy.titleCategoryName('Business')

      cy.getBlogArticleByTitle('amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus')
    })

    it('should open on the Electronics category page', () => {
      cy.clickBlogCategory('Electronics')
      cy.titleCategoryName('Electronics')

      cy.getBlogArticleByTitle('amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus')
    })

    it('should open on the Technology category page', () => {
      cy.clickBlogCategory('Technology')
      cy.titleCategoryName('Technology')

      cy.getBlogArticleByTitle('amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus')
    })

    it('should open on the Fashion category page', () => {
      cy.clickBlogCategory('Fashion')
      cy.titleCategoryName('Fashion')

      cy.getBlogArticleByTitle('amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus')
    })

  })

})
