// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import loc_um from'../support/locators_Teste_Um'

var dados = {
    email: 'testeqa122@gmail.com',
    senha: 'Teste122@',
}

Cypress.Commands.add('login_sucesso', (email, password) => { 
    cy.get(loc_um.BTN_LOGIN.Botao_fazer_login).should('be.visible').and('exist')
            cy.get(loc_um.BTN_LOGIN.Botao_fazer_login).click({ force: true })
            cy.wait(100)
            //Campo E-mail
            cy.get(loc_um.EMAIL.Digite_Email).and('exist').and('be.empty')
            cy.get(loc_um.EMAIL.Digite_Email).type(dados.email)
            cy.get(loc_um.BTN_PROXIMO.Botão_proximo).click({ force: true })
            cy.wait(100)
            //Campo Senha
            cy.get(loc_um.SENHA.Digite_a_senha).should('be.visible').and('exist')
            cy.get(loc_um.SENHA.Digite_a_senha).type(dados.senha)
            cy.wait(100)
            //Botão de confirmar
            cy.get(loc_um.BTN_CONFIRMAR.Botao_confirmar).should('be.visible').and('exist')
            cy.get(loc_um.BTN_CONFIRMAR.Botao_confirmar).click({ force: true })

 })
