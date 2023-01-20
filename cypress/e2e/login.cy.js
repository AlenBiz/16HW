import { faker } from "@faker-js/faker";

describe("Testing login", () => {
    let randomEmail = faker.internet.email();
    let randomPassword = faker.internet.password();
  beforeEach("Visit", () => {
    cy.visit("/login");
    cy.contains("Вход на сайт").should("exist");
  });
  it("Registered user login", () => {
    cy.login("testbizyaev@gmail.com", "rty123");
    cy.contains("Alena").should("exist");
  });

  it("Unregistered user login", () => {
    
    cy.login(randomEmail, randomPassword);
    cy.contains(
      "Мы не нашли пользователя с таким email. Зарегистрироваться?"
    ).should("exist");
  });
  it("Login with incorrect email", () => {
    cy.login("testbizyaev@", "rty123");
    cy.contains("Некорректный email").should("exist");
  });

  it("Login with incorrect password", () => {
    cy.login("testbizyaev@gmail.com", randomPassword);
    cy.contains('Неверное имя пользователя или пароль').should("exist");
  });

});
