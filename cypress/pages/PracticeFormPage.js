import { BasePage } from './BasePage';

const selectors = {
  firstName: '#firstName',
  lastName: '#lastName',
  email: '#userEmail',
  mobile: '#userNumber',
  address: '#currentAddress',
  dateOfBirth: '#dateOfBirthInput',
  submit: '#submit',
  modal: '.modal-content',
  resultTable: '.table-responsive',
  gender: {
    Male: '#gender-radio-1',
    Female: '#gender-radio-2',
    Other: '#gender-radio-3',
  },
};

export class PracticeFormPage extends BasePage {
  visit() {
    super.visit('/automation-practice-form');
    cy.contains('h1', 'Practice Form').should('be.visible');
  }

  completeRequiredFields(student) {
    cy.get(selectors.firstName).clear().type(student.firstName);
    cy.get(selectors.lastName).clear().type(student.lastName);
    cy.get(selectors.email).clear().type(student.email);
    cy.get(selectors.gender[student.gender]).click();
    cy.get(selectors.mobile).clear().type(student.mobile);

    if (student.address) {
      cy.get(selectors.address).type(student.address);
    }
  }

  submit() {
    this.clickVisible(selectors.submit);
  }

  selectDateOfBirth({ day, month, year }) {
    cy.get(selectors.dateOfBirth).click();
    cy.get('.react-datepicker__year-select').select(String(year));
    cy.get('.react-datepicker__month-select').select(month);
    cy.get(`.react-datepicker__day--0${day}:not(.react-datepicker__day--outside-month)`).click();
  }

  expectSuccessfulSubmission(student) {
    cy.get(selectors.modal)
      .should('be.visible')
      .within(() => {
        cy.contains('Thanks for submitting the form').should('be.visible');
        cy.get(selectors.resultTable).should('contain', `${student.firstName} ${student.lastName}`);
        cy.get(selectors.resultTable).should('contain', student.email);
        cy.get(selectors.resultTable).should('contain', student.gender);
        cy.get(selectors.resultTable).should('contain', student.mobile);
      });
  }

  expectBrowserValidation(selector) {
    cy.get(selector).should('match', ':invalid');
    cy.get(selectors.modal).should('not.exist');
  }

  expectSummaryValue(value) {
    cy.get(selectors.modal).find(selectors.resultTable).should('contain', value);
  }
}

export { selectors as practiceFormSelectors };
