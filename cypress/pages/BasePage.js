export class BasePage {
  visit(path) {
    cy.visit(path);
  }
  clickVisible(selector) {
    cy.get(selector).scrollIntoView().should('be.visible').click();
  }
}
