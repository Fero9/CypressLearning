/// <reference types="cypress"/>

it('Opens the google search engine', () =>{
    cy.visit('https://google.com')

    cy.get('#APjFqb').type('Amazon products{Enter}')

    //cy.contains('Google претрага').click()
})