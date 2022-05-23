/// <reference types ="cypress"/>

import loc_um from '../../support/locators_Teste_Um'

describe('TESTE QA 1', () => {

    var dados = {
        email: 'testeqa122@gmail.com',
        senha: '1234',
    }

    before(() => {
        cy.visit("/")
        cy.wait(100)
    })
    describe('SENHA INVALIDA', () => {
        it('Senha Inválida', () => {
            //Botão de Login
            cy.get(loc_um.BTN_LOGIN.Botao_fazer_login).should('be.visible').and('exist')
            cy.get(loc_um.BTN_LOGIN.Botao_fazer_login).click({ force: true })
            //Campo E-mail
            cy.get(loc_um.EMAIL.Digite_Email).should('be.visible').and('exist').and('be.empty')
            cy.get(loc_um.EMAIL.Digite_Email).type(dados.email)
            cy.get(loc_um.BTN_PROXIMO.Botão_proximo).click({ force: true })
            //Campo Senha
            cy.get(loc_um.SENHA.Digite_a_senha).should('be.visible').and('exist')
            cy.get(loc_um.SENHA.Digite_a_senha).type(dados.senha)
            //Botão de confirmar
            cy.get(loc_um.BTN_CONFIRMAR.Botao_confirmar).should('be.visible').and('exist')
            cy.get(loc_um.BTN_CONFIRMAR.Botao_confirmar).click({ force: true })
            //Mensagem de erro senha
            cy.get(loc_um.MENSAGEM_ERRO_SENHA.mensagem_erro_senha).should('contain.text', 'Senha incorreta. Tente novamente ou clique em "Esqueceu a senha?" para escolher uma outra')
            cy.clearCookies()
        })
    })
})