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
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
const regPage = require("../fixtures/pages/regPage.json");
const loginPage = require("../fixtures/pages/loginPage.json");

Cypress.Commands.add("login", (userName, password) => {
  cy.get(loginPage.loginField).clear().type(userName);
  cy.get(loginPage.passwordField).clear().type(password);
  cy.get(loginPage.submitButton).click({ force: true });
});


  Cypress.Commands.add("register", (userName, email) => {
    cy.get(regPage.nameField).clear().type(userName);
    cy.get(regPage.emailField).clear().type(email);
    cy.contains('Зарегистрировать').click({ force: true });
  });