describe('App', () => {
   beforeEach(() => {
      cy.visit('http://localhost:3000/')
   })
   it('Render the title correctly', () => {
      cy.get('h1').contains(/albatros/i)
   })
})
