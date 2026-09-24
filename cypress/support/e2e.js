import 'cypress-mochawesome-reporter/register';

beforeEach(() => {
  cy.on('uncaught:exception', (error) => {
    const knownThirdPartyError = /Script error|ResizeObserver loop|adsbygoogle/i.test(
      error.message,
    );

    if (knownThirdPartyError) {
      return false;
    }

    return undefined;
  });
});
