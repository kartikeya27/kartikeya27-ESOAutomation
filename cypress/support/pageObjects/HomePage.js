class LoginPage {
    getTextArea() {
        return cy.get('.search-ctrl > .search-form-ctrl > #query')
    }

    getMyLocation() {
        return cy.get('.suggestions-location > strong')
    }

    selectPincode() {
        return cy.get('.search-ctrl.query.suggestions-container')
    }

    saleButton() {
        return cy.get('.btn.btn-red.btn-buy')
    }
}

export default LoginPage;