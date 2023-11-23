///<reference types="cypress" />

describe('Ucim sa cypress', () => {
  before('Nastivime stranku a nastavime si velkost viewportu', () => {
    cy.visit('https://the-internet.herokuapp.com');
    cy.viewport(1440, 1200);
  })

  it("Ideme otestovat kody", () => {

    cy.contains("Status Codes").click();

    cy.contains("200").click();
    cy.get(".example").contains("This page returned a 200 status code.");
    cy.contains("here").click();

    cy.contains("301").click();
    cy.get(".example").contains("This page returned a 301 status code.");
    cy.contains("here").click();

    cy.get("li > a").eq(2).click();
    cy.get(".example").contains("This page returned a 404 status code.");
    cy.contains("here").click();

    cy.get("li > a").eq(3).click();
    cy.get(".example").contains("This page returned a 500 status code.");
    cy.contains("here").click();

  })
})