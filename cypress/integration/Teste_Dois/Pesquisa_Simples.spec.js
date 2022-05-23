/// <reference types ="cypress"/>

import loc_dois from '../../support/locators_Teste_Dois'

var pesquisa = {
    simples: 'teste de software'
}

describe('TESTE QA 2', () => {
    before(() => {
        cy.visit("/")
        cy.login_sucesso()
        cy.wait(100)
    })
    describe('PESQUISA SIMPLES', () => {
        it('Pesquisa simples', () => {
            cy.get(loc_dois.CAMPO_DE_PESQUISA.c_pesquisa).should('be.empty').and('exist').and('be.visible')
            cy.get(loc_dois.CAMPO_DE_PESQUISA.c_pesquisa).type(pesquisa.simples).type('{enter}')

        })
    })
})