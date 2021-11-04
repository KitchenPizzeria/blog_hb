describe('Navigating the website', () => {
  it('should take you to home page', () => {
    cy.visit('http://localhost:3000/');
    cy.get('.nav-tabs > :nth-child(1) > .nav-link').click();
    cy.url().should('include', '/');
  });

  it('should take you take you to add blog', () => {
    cy.visit('http://localhost:3000/');
    cy.get('.nav-tabs > :nth-child(2) > .nav-link').click();
    cy.url().should('include', '/add');
  });

  it('should take you to the connections page', () => {
    cy.visit('http://localhost:3000/');
    cy.get('.nav-tabs > :nth-child(3) > .nav-link').click();
    cy.url().should('include', '/connections');
  });

  it('should take you to comments', () => {
    cy.visit('http://localhost:3000/');
    cy.get('.nav-tabs > :nth-child(4) > .nav-link').click();
    cy.url().should('include', '/comments');
  });
});

describe('Routing user creating blog', () => {
  it("should redirect back to Feed page and place blog inside 'posts' section", () => {
    cy.visit('http://localhost:3000/add');
    cy.get('button').click();

    cy.get('new-post');
  });
});
