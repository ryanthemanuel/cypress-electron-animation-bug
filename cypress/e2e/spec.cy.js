/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    cy.visit('cypress/fixtures/bug.html')

    cy.get('#app').should('exist')
    cy.get('#remove').click()
    cy.get('#app').should('not.exist')
  })
})
