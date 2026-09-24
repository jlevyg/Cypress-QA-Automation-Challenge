import { BasePage } from './BasePage';

const selectors = {
  multiselect: {
    label: 'Multiselect drop down',
    input: '[role="combobox"]',
    option: '[role="option"]',
    removeChip: (color) => `[aria-label="Remove ${color}"]`,
    removeAnyChip: '[aria-label^="Remove "]',
  },
};
export class SelectMenuPage extends BasePage {
  visit() {
    super.visit('/select-menu');
    cy.contains('h1', 'Select Menu').should('be.visible');
  }
  getMultiselect() {
    return cy.contains('p', selectors.multiselect.label).next();
  }
  selectColors(colors) {
    colors.forEach((color) => {
      this.getMultiselect().within(() => {
        cy.get(selectors.multiselect.input).click();
        cy.contains(selectors.multiselect.option, color).click();
      });
    });
  }
  expectSelectedColors(colors) {
    this.getMultiselect().within(() => {
      colors.forEach((color) => {
        cy.get(selectors.multiselect.removeChip(color)).should('be.visible');
      });

      cy.get(selectors.multiselect.removeAnyChip).should('have.length', colors.length);
    });
  }
  removeColor(color) {
    this.getMultiselect().within(() => {
      cy.get(selectors.multiselect.removeChip(color)).click();
    });
  }
}
