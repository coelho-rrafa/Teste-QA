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

import { mainPageElements } from "../pages/mainPage"
import { resultPage, resultPageElements } from "../pages/resultSearchPage"

Cypress.Commands.add('search', (parameter) => {
    cy.get(mainPageElements.searchIcon).click()
    cy.get(mainPageElements.searchField).should('be.visible')
    cy.get(mainPageElements.searchField).type(parameter)

    cy.get(mainPageElements.searchButton).click()
})

Cypress.Commands.add('titleValidation', () => {
    let articleTitle

    cy.get('article').eq(0).find('h2 a')
      .invoke('text')
      .then((text) => {
        articleTitle = text.trim()
      })
     .then(() => {
       cy.wait(1000) // espera 1 segundo para garantir que o valor de articleTitle seja atribuído corretamente
       cy.get(resultPageElements.articles).eq(0).find(resultPageElements.articleTitle)
         .should('be.visible')
         .click()
       cy.get(resultPageElements.storyTitle).should('contain', articleTitle)
    })
})