/// <reference types ="cypress"/>
import loc_um from '../../support/locators_Teste_Um'

describe('TESTE QA 1', () => {
    var dados = {
        email: '1sdfsfsdf',

    }
    before(() => {
        cy.visit("/")
        cy.wait(100)
    })
    describe('E-MAIL INVALIDO', () => {
        it('e-mail invalido', () => {
            //Botão de Login
            cy.get(loc_um.BTN_LOGIN.Botao_fazer_login).should('be.visible').and('exist')
            cy.get(loc_um.BTN_LOGIN.Botao_fazer_login).click({ force: true })
            cy.timeout({timeout:8000})
            //Campo E-mail
            cy.get(loc_um.EMAIL.Digite_Email).should('be.visible').and('exist').and('be.empty')
            cy.get(loc_um.EMAIL.Digite_Email).type(dados.email)
            cy.get(loc_um.BTN_PROXIMO.Botão_proximo).click({ force: true })
            cy.wait(100)
            //Mensagem de erro 
            cy.get(loc_um.MENSAGEM_ERRO_EMAIL.mensagem_erro_email).should('contain.text','O Google não reconhece o e-mail.')
            cy.clearCookies()
        })
    })

})