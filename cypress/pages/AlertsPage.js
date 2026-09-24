import { BasePage } from './BasePage';

const selectors = {
  alertButton: '#alertButton',
  confirmButton: '#confirmButton',
  confirmResult: '#confirmResult',
  promptButton: '#promtButton',
  promptResult: '#promptResult',
};

export class AlertsPage extends BasePage {
  visit() {
    super.visit('/alerts');
    cy.contains('h1', 'Alerts').should('be.visible');
  }

  triggerAlert() {
    this.clickVisible(selectors.alertButton);
  }

  triggerConfirm() {
    this.clickVisible(selectors.confirmButton);
  }

  triggerPrompt() {
    this.clickVisible(selectors.promptButton);
  }
}

export { selectors as alertSelectors };
