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
// Cypress.Commands.add("login", (email, password) => { ... })
//
Cypress.Commands.add('verifyAddress1', () => 
{
    cy.get('[href="/apt-29-winter-gardens-34-alfred-street-belfast/670857"] > .propbox-details > h2 > .propbox-addr')
    .should(($span) => {
        //expect($span.text().trim()).equal('Apt 29 Winter Gardens, 34 Alfred Street,');
        expect($span.text().trim()).contains('Winter Gardens')
    })
})

Cypress.Commands.add('verifyAddress2', () => 
{
    cy.get('div.maxwidth')
    .should(($h1) => {
        expect($h1.text().trim()).contains('BT6')
    })
})

Cypress.Commands.add('verifyAddress3', () => 
{
    cy.get('div.maxwidth')
    .should(($h1) => {
        expect($h1.text().trim()).contains('Sorry, No properties found')
    })
})
  


// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
