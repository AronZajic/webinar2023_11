///<reference types="cypress" />

describe('Ucim sa cypress', () => {
  before('Nastivime stranku a nastavime si velkost viewportu', () => {
    cy.visit('http://localhost:4200/');
    cy.viewport(1440, 1200);
  })

  it("Ideme testovat ngx stranku", () => {

    cy.contains("Layout").click();
    cy.contains("Stepper").click();

    /*cy.get(".step-content").eq(0).contains("Step content #1");
    cy.get(".step-content").eq(0).contains("next").click();
    cy.get(".step-content").eq(0).contains("Step content #2");
    cy.get(".step-content").eq(0).contains("next").click();
    cy.get(".step-content").eq(0).contains("Step content #3");
    cy.get(".step-content").eq(0).contains("next").click();
    cy.get(".step-content").eq(0).contains("Step content #4");*/

    cy.get(".step-content").eq(0).contains("Step content #1");
    cy.get(".step-content").eq(0).contains("next").click();

    cy.get(".step-content").eq(0).contains("Step content #2");
    cy.get(".step-content").eq(0).contains("prev").click();
    cy.get(".step-content").eq(0).contains("Step content #1");

    cy.get(".step-content").eq(0).contains("next").click();
    cy.get(".step-content").eq(0).contains("next").click();
    cy.get(".step-content").eq(0).contains("Step content #3");
    cy.get(".step-content").eq(0).contains("prev").click();
    cy.get(".step-content").eq(0).contains("Step content #2");
    
    cy.get(".step-content").eq(0).contains("next").click();
    cy.get(".step-content").eq(0).contains("next").click();
    cy.get(".step-content").eq(0).contains("Step content #4");
    cy.get(".step-content").eq(0).contains("prev").click();
    cy.get(".step-content").eq(0).contains("Step content #3");
    cy.get(".step-content").eq(0).contains("next").click();

  })
})