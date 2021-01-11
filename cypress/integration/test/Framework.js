// <referen/ce types="Cypress" />
import HomePage from '../../support/pageObjects/HomePage'

describe('Regression Test Suite', function() {
    beforeEach(function() {
        //runs once before all tests in the block
        cy.fixture('home').then(function(homedata) {
            this.homedata = homedata
        })
    })

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })

    const homePage = new HomePage()
    
    it('Home Page My Location test case', function() {
        cy.visit(Cypress.env('url'))
        homePage.getTextArea().trigger('mousedown').click()
        homePage.getMyLocation().click()
        cy.verifyAddress1()
    })

    it('Home Page BT6 pincode test case', function() {
        cy.visit(Cypress.env('url'))
        homePage.getTextArea().clear()
        homePage.selectPincode().type(this.homedata.pinCode).trigger('blur')
        .type('{enter}')
        cy.verifyAddress2()
        
    })

    it('Home Page not available pincode test case', function() {
        cy.visit(Cypress.env('url'))
        homePage.getTextArea().clear()
        homePage.selectPincode().type(this.homedata.pinCode1).trigger('blur')
        .type('{enter}')
        cy.verifyAddress3()
        
    })

    
})
    
