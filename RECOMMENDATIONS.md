# Recommendations

What I'd do next:

## CI/CD

- Run `npm ci` and `npm test` on every push and pull request (GitHub Actions is enough for this size).
- Upload `artifacts/` (report, screenshots, videos) from every run so a failure can be checked without running it locally.
- Show retries in the CI output. With `retries: 1`, a test that only passes on the second try looks green, and I'd want to see that.
- Add ESLint with `eslint-plugin-cypress` and run it before the tests. I left it out because of time.

## Organizing the suite

- Tag tests so different runs can pick different sets: a quick `@smoke` set (the valid form submission, the alert, the multiselect) for every push, and everything else nightly.
- Tag the D-001 test as `@known-defect` so it's clear it asserts a bug, and so it's easy to find and flip when the bug is fixed.
- Keep one spec and one page object per page, as now. The three specs don't depend on each other, so they can run in parallel as the suite grows.



## Test data and structure

- Add a custom command that blocks DemoQA's ad domains with `cy.intercept` and call it before each visit. Right now I only ignore the errors ads throw and scroll past ads that cover buttons. Blocking them would prevent the problem instead of working around it. I left it out because of time.
- Move the future date for D-001 into the fixtures and build the expected summary text from it, instead of repeating the string in the test.
- Add a few data-driven cases now that the fixture drives the gender choice (all three genders, a mobile number that isn't 10 digits).
- Fix the limitations listed in [SUMMARY.md](SUMMARY.md): the date picker helper for single-digit days, and checking summary values row by row instead of with `contain` on the whole table.
- Ask for `data-testid` attributes where the app has no stable ids. On DemoQA that isn't possible, which is why the multiselect is found by its label.

## Metrics I'd track

- Pass rate on the first attempt (not after retries), to see real flakiness.
- Which tests needed a retry, and how often.
- Total run time, so it stays fast enough to run on every push.
- Bugs found by the suite versus bugs found later, to show where coverage is missing.

