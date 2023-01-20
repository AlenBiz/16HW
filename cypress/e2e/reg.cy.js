const users = require("../fixtures/users.json");
import { faker } from "@faker-js/faker";

describe("Testing registration", () => {
  beforeEach("Visit", () => {
    cy.visit("/register");
    cy.contains("Регистрация").should("exist");
  });

  it("Correct email and correct name of an unregistered user", () => {
    users.forEach((item) => {
      let randomEmail = faker.internet.email();
      cy.register(item.user.username, randomEmail);

      cy.contains("Письмо отправлено!").should("exist");
      cy.visit("/register");
    });
  });
  it("Correct email and invalid name of an unregistered user", () => {
    let randomEmail = faker.internet.email();
    cy.register(" ", randomEmail);

    cy.contains("Некорректное поле").should("exist");
  });
  it("Correct email and invalid name of an unregistered user", () => {
    let randomEmail = faker.internet.email();
    cy.register("A", randomEmail);

    cy.contains("Некорректное поле").should("exist");
  });
  it("Invalid email and correct name of an unregistered user", () => {
    cy.register("Alena", "testbiz@");
    cy.contains("Некорректный email").should("exist");
  });
});
  it("Registering a Registered User", () => {
    cy.register("Alena", "testbizyaev@gmail.com");
    cy.contains("Такой пользователь уже зарегистрирован. Войти?").should(
      "exist"
    );
  });
 
