describe('tasks page', () => {
  it('should render the main image', () => {
    cy.visit('localhost:5173/');
    cy.get('.main-header img');
  });

  it('should display the page title', ()=>{
    cy.visit('localhost:5173/');
    cy.get('h1').contains('My Cypress Course Tasks');
  })
})