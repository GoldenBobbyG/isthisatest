describe('Tech Quiz End-to-End Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('starts the quiz and completes it', () => {
    // Verify Start button and click
    cy.fixture('questions.json').then((questions) => {
      cy.intercept('GET', '/api/questions', { body: questions }).as('getQuestions');
    });
    cy.get('button').contains('Start Quiz').should('exist').click();
    cy.get('.spinner-border', { timeout: 10000 }).should('not.exist'); // Wait for loading to finish
    cy.get('.card', { timeout: 10000 }).should('exist'); // Ensure the question card exists

    // Answer all questions
    for (let i = 0; i < 10; i++) {
      cy.get('.card', { timeout: 10000 }).should('exist'); // Ensure the question card exists
      cy.get('h2', { timeout: 10000 }).should('exist'); // Ensure the question text exists
      cy.get('.mt-3', { timeout: 10000 }).should('exist'); // Ensure the answer options exist
      cy.get('.btn').first().should('exist').click(); // Click the first answer
    }

    // Verify quiz completion
    cy.get('h2', { timeout: 10000 }).contains('Quiz Completed');
    cy.get('.alert', { timeout: 10000 }).should('exist');
    cy.get('button').contains('Take New Quiz').should('exist');
  });
});