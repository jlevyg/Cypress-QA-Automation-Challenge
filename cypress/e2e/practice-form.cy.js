import { PracticeFormPage, practiceFormSelectors } from '../pages/PracticeFormPage';

describe('Practice Form', () => {
  const form = new PracticeFormPage();

  beforeEach(() => {
    form.visit();
  });

  it('TC-FORM-01: submits the required student details and displays the summary', () => {
    cy.fixture('students').then(({ validStudent }) => {
      form.completeRequiredFields(validStudent);
      form.submit();
      form.expectSuccessfulSubmission(validStudent);
    });
  });

  it('TC-FORM-02: does not submit when required fields are empty', () => {
    form.submit();
    form.expectBrowserValidation(practiceFormSelectors.firstName);
  });

  it('TC-FORM-03: does not submit a malformed email address', () => {
    cy.fixture('students').then(({ invalidEmailStudent }) => {
      form.completeRequiredFields(invalidEmailStudent);
      form.submit();
      form.expectBrowserValidation(practiceFormSelectors.email);
    });
  });

  it('TC-FORM-04: documents D-001: the form accepts a future date of birth', () => {
    const futureDate = { day: '24', month: 'September', year: 2030 };

    cy.fixture('students').then(({ validStudent }) => {
      form.completeRequiredFields(validStudent);
      form.selectDateOfBirth(futureDate);
      form.submit();
      form.expectSummaryValue('24 September,2030');
      cy.get(practiceFormSelectors.modal).screenshot('D-001-future-date-accepted');
    });
  });
});
