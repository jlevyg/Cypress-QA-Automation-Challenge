import { AlertsPage, alertSelectors } from '../pages/AlertsPage';

describe('Browser dialogs', () => {
  const alerts = new AlertsPage();

  beforeEach(() => {
    alerts.visit();
  });

  it('TC-ALT-01: shows the expected alert message', () => {
    cy.on('window:alert', (message) => {
      expect(message).to.equal('You clicked a button');
    });

    alerts.triggerAlert();
  });

  it('TC-ALT-02: handles the cancel branch of a confirmation dialog', () => {
    cy.on('window:confirm', (message) => {
      expect(message).to.equal('Do you confirm action?');
      return false;
    });

    alerts.triggerConfirm();
    cy.get(alertSelectors.confirmResult).should('have.text', 'You selected Cancel');
  });

  it('TC-ALT-03: enters text into a prompt and displays the result', () => {
    const answer = 'Cypress candidate';

    cy.window().then((window) => {
      cy.stub(window, 'prompt').returns(answer);
    });

    alerts.triggerPrompt();
    cy.get(alertSelectors.promptResult).should('have.text', `You entered ${answer}`);
  });
});
