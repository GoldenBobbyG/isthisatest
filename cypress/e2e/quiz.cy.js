describe('Tech Quiz End-to-End Tests', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('starts the quiz and completes it', () => {
      // Verify Start button and click
      cy.get('button').contains('Start Quiz').click();
  


      //Answer all questions
      for (let i = 0; i < 10; i++) {
        cy.get('.card').should('exist');
        cy.get('h2').should('exist');
        cy.get('.mt-3').should('exist');
        cy.get('.btn').first().click(); // Click the first answer
      }
  
      // // Verify quiz completion
      cy.get('h2').contains('Quiz Completed');
      cy.get('.alert').should('exist');
      cy.get('button').contains('Take New Quiz').should('exist');
    });
  });