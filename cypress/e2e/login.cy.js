/// <reference types="cypress" />


describe("Login", () => {
    it.only("Sucess Login ", () => {
        // cy.viewport('iphone-8') test in mobile
        cy.visit('https://automationpratice.com.br/login');
        cy.get('#user').type('dan@qazando.com');
        cy.get('#password').type('123456');
        cy.get('#btnLogin').click();
        cy.get('#swal2-title').should('be.visible');
        cy.get('#swal2-title').should('have.text', 'Login realizado');
    });

    it("Invalid E-mail", () => {
        cy.visit('https://automationpratice.com.br/login');
        cy.get('#user').type('teste');
        cy.get('#password').type('123456');
        cy.get('#btnLogin').click();
        cy.get('.invalid_input').should('have.text', 'E-mail inválido.')
    });

    it("Invalid Password", () => {
        cy.visit('https://automationpratice.com.br/login');
        cy.get('#user').type('dan@qazando.com');
        cy.get('#password').type('teste');
        cy.get('#btnLogin').click();
        cy.get('.invalid_input').should('have.text', 'Senha inválida.')
    });
});