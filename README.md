# Cypress QA Automation Challenge

End-to-end tests for [DemoQA](https://demoqa.com), written in Cypress with the page object pattern. The suite covers browser dialogs, the student registration form, and a React multiselect.

## Prerequisites

- Node.js 20 or newer
- Google Chrome

## Setup

`npm install`

## Running the tests

- `npm test` - Headless run in Chrome
- `npm run test:headed` - Same run, with a visible browser
- `npm run test:open` - Cypress interactive runner

Failed tests retry once in `cypress run`. The interactive runner does not retry.

## Coverage

- **Forms (`/automation-practice-form`)**
  - `TC-FORM-01`: Successful registration with required fields (name, email, gender, mobile) plus address, with verification of the confirmation modal and its results table.
  - `TC-FORM-02`: Required field validation preventing submission on an empty form.
  - `TC-FORM-03`: Email format validation rejecting a malformed address.
  - `TC-FORM-04`: Defect D-001: a future date of birth is accepted and shown in the summary (screenshot captured as evidence).
- **Selections (`/select-menu`)**
  - `TC-SEL-01`: React-Select multi-select color selection and removal of an individual tag, verifying the remaining tags and their count.
- **Dialogs (`/alerts`)**
  - `TC-ALT-01`: Trigger a simple browser alert and verify its message.
  - `TC-ALT-02`: Confirm dialog Cancel branch, verifying the dialog text and the "You selected Cancel" result.
  - `TC-ALT-03`: Prompt dialog input stubbing and verification of the confirmation message.

## Results

Each run writes:

- an HTML report to `artifacts/reports/index.html`
- videos to `artifacts/videos/`
- screenshots to `artifacts/screenshots/`

## Known defects

- **D-001:** The practice form accepts a date of birth in the future and shows it in the submission summary. `practice-form.cy.js` records this behavior and saves a screenshot named `D-001-future-date-accepted`.
- **D-002:** State and City stay paired after the State changes. Found manually, not automated.

Full write-up: [DEFECTS.md](DEFECTS.md)

## Further reading

- [SUMMARY.md](SUMMARY.md) - Approach, design decisions and known limitations
- [RECOMMENDATIONS.md](RECOMMENDATIONS.md) - What I'd do next

---

> **AI disclosure:** An AI assistant was used only to apply Markdown formatting and proofread the documentation files (README, SUMMARY, DEFECTS, RECOMMENDATIONS). The tests, page objects, configuration and the content of these documents are my own work.
