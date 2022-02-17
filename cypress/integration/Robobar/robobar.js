import {Given} from "cypress-cucumber-preprocessor/steps";
import {Then} from "cypress-cucumber-preprocessor/steps";
import {When} from "cypress-cucumber-preprocessor/steps";


//Basic buttons
function colaButton() {
    return cy.get(':nth-child(1) > :nth-child(3) > .row > .col-5 > .input-group-append > .btn')
}


function beerButton() {
    return cy.get(':nth-child(2) > :nth-child(3) > .row > .col-5 > .input-group-append > .btn')
}

function wineButton() {
    return cy.get(':nth-child(3) > :nth-child(3) > .row > .col-5 > .input-group-append > .btn')
}

function submitButton() {
    return cy.get('.col-12 > .btn')
}

//Basic total
function totalText() {
    return cy.get(':nth-child(4) > .ng-binding')
}


//N beverage
function addNColas(n) {

    for(let i=0 ; i<n ; i++) {
        colaButton()
            .click()
    }
}

function addNBeers(n) {
    for(let i=0; i<n; i++) {
        beerButton()
            .click()
    }
}

function addNWines(n) {
    for(let i=0; i<n; i++) {
        wineButton()
            .click()
    }
}


function confirmationMessage() {
    return cy.get('p')
}

function ageInput() {
    return cy.get('#ageInput')
}
//Step definition


Given('user opens robobar website', () => {
    cy.visit('http://localhost:3000/')
})

When('user adds a cola',() => {
    colaButton()
        .click()
})

When('user adds a beer',() => {
    beerButton()
        .click()
})


Then('total should be €1.25',() => {
    totalText()
        .should("contain.text", "€1.25")
})

Then('total should be €2.00',() => {
    totalText()
        .should("contain.text", "€2.00")
})

Then('total should be €2.50',() => {
    totalText()
        .should("contain.text", "€2.50")
})

When('user adds {int} cola',(n) => {
    addNColas(n)
})

When('user adds {int} beers',(n) => {
    addNBeers(n)
})

When('user adds {int} wines',(n) => {
    addNWines(n)
})

Then('total should be €{float}',(totalcost) => {
    totalText()
        .should("contain.text", "€" + totalcost.toString)
})

When('user adds {int} cola {int} beer {int} wine',(colas, beers, wines) => {
    addNColas(colas)
    addNBeers(beers)
    addNWines(wines)
})

And('user checks out', ()=>{
    submitButton().click()
})

Then('user is {int} years old', (age)=>{
    ageInput()
        .type(age)
})

Then('robobar confirms order', ()=>{
    confirmationMessage().should("contain.text", "Coming right up! ~bzzzt~")
})




