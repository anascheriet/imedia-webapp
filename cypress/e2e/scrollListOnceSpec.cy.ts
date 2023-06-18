describe('Scroll list once', () => {
  it('the number of elements in pokemon list should double after one scroll ', () => {
    // Visit your page with the list
    const perPageCount = 20;
    cy.visit("localhost:3006")

    cy.get('.styledPokemon').should('have.length', perPageCount);

    cy.get('.styledPokemon')
      .should('have.length', perPageCount * 2);
  })
})






