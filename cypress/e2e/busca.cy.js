/// <reference types="Cypress"/>
const mainPage = require("../pages/mainPage").mainPageElements



describe('Efetuar Pesquisa na página pela palavra AgiBank e clicar no primeiro artigo', () => {
    beforeEach(() => {
        cy.viewport(1280, 720)
        cy.visit(mainPage.pageUrl)
        cy.get(mainPage.brandLogo).should('be.visible');
      })
    
    it('Efetuar Pesquisa pela palavra "Agibank"', () => {
        let termoPesquisa = "Agibank"

        cy.search(termoPesquisa)
        cy.get(mainPage.searchMessage).should('contain', termoPesquisa)
                
        cy.titleValidation()
    })        
})
