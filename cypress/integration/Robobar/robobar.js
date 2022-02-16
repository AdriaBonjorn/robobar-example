import {Given} from "cypress-cucumber-preprocessor/steps";
import {Then} from "cypress-cucumber-preprocessor/steps";
import {When} from "cypress-cucumber-preprocessor/steps";

//Step definition


Given('user opens robobar website', () => {
    cy.visit('http://localhost:3000/')
})

When('user adds a cola',() => {
    colaButton()
        .click()
})

Then('total should be €1.25',() => {
    totalText()
        .should("contain.text", "€1.25")
})
