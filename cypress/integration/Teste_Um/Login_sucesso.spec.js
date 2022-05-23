/// <reference types ="cypress"/>

import loc_um from '../../support/locators_Teste_Um'

describe('TESTE QA 1', () => {
    var dados = {
        email: 'testeqa122@gmail.com',
        senha: 'Teste122@',
    }

    before(() => {
        cy.visit("/")
        cy.wait(100)
    })
    describe('LOGIN COM SUCESSO', () => {
        it('Login com sucesso', () => {
            //Botão de Login
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
            cy.wait(100)
            cy.clearCookies()
        })
    })
})
