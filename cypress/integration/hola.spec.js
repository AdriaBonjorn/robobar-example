// hola.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

function colaButton() {
    return cy.get(':nth-child(1) > :nth-child(3) > .row > .col-5 > .input-group-append > .btn')
}

function beerButton() {
    return cy.get(':nth-child(2) > :nth-child(3) > .row > .col-5 > .input-group-append > .btn')
}

function wineButton() {
    return cy.get(':nth-child(3) > :nth-child(3) > .row > .col-5 > .input-group-append > .btn')
}

function totalText() {
    return cy.get(':nth-child(4) > .ng-binding')
}

function submitButton() {
    return cy.get('.col-12 > .btn')
}

function ageInput() {
    return cy.get('#ageInput')
}

function orderButton() {
    return cy.get('.btn-success')
}

function newOrderButton() {
    return cy.get('.btn')
}

function alertMessage() {
    return cy.get('.alert > .ng-binding')
}




describe('Hello Cypress', () => {
    it('Says hello', () => {
        expect(true).to.equal(true)
    })
    it('Order a cola', () => {
        cy.visit('http://localhost:3000/')
        colaButton()
            .click()
        totalText()
            .should("contain.text", "€1.25")
    })
    it('Order two colas', () => {
        cy.visit('http://localhost:3000/')
        colaButton()
            .click()
            .click()
        totalText()
            .should("contain.text", "€2.50")
    })

    it('Order two beer overage', () => {
        cy.visit('http://localhost:3000/')
        beerButton()
            .click()
            .click()
        totalText()
            .should("contain.text", "€4.00")
        submitButton()
            .click()
        ageInput()
            .should('be.visible')
        ageInput()
            .type('25')
        orderButton()
            .click()
        newOrderButton()
            .should('be.visible')

    })

    it('Order two beer underage', () => {
        cy.visit('http://localhost:3000/')
        beerButton()
            .click()
            .click()
        totalText()
            .should("contain.text", "€4.00")
        submitButton()
            .click()
        ageInput()
            .should('be.visible')
        ageInput()
            .type('15')
        orderButton()
            .click()
        alertMessage()
            .should('be.visible')

    })

    it('Order two cola and one wine overage', () => {
        cy.visit('http://localhost:3000/')
        colaButton()
            .click()
            .click()
        wineButton()
            .click()
        totalText()
            .should("contain.text", "€5.50")
        submitButton()
            .click()
        ageInput()
            .should('be.visible')
        ageInput()
            .type('25')
        orderButton()
            .click()
        newOrderButton()
            .should('be.visible')

    })

    it('Order two cola and one wine underage', () => {
        cy.visit('http://localhost:3000/')
        colaButton()
            .click()
            .click()
        wineButton()
            .click()
        totalText()
            .should("contain.text", "€5.50")
        submitButton()
            .click()
        ageInput()
            .should('be.visible')
        ageInput()
            .type('15')
        orderButton()
            .click()
        alertMessage()
            .should('be.visible')

    })
})