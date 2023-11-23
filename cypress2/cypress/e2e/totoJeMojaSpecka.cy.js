///<reference types="cypress" />

describe('Ucim sa cypress', () => {
  before('Nastivime stranku a nastavime si velkost viewportu', () => {
    cy.visit('https://the-internet.herokuapp.com');
    cy.viewport(1440, 1200);
  })

  it("", () => {
    cy.contains("Dynamic Content").click();
    cy.get(".large-10").eq(3);

    cy.contains("click here").click()
    cy.wait(2000)
    cy.get(".large-10").eq(3);
  })
})