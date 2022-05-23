/// <reference types ="cypress"/>
import loc_dois from'../../support/locators_Teste_Dois'

var pesquisa = {
    avançada:'"amazon prime"'
}

describe('TESTE QA 2', () => {
    before(() => {
        cy.visit("/")
        cy.login_sucesso()
        cy.wait(100)
    })
    describe('PESQUISA AVANÇADA',()=>{
        it('Pesquisa sem resultado',()=>{
            cy.get(loc_dois.CAMPO_DE_PESQUISA.c_pesquisa).should('be.empty').and('exist').and('be.visible')
            cy.get(loc_dois.CAMPO_DE_PESQUISA.c_pesquisa).type(pesquisa.avançada).type('{enter}')
            cy.get(loc_dois.SITE_DA_AMAZON.Amazon).click()
            
        })
    })
})