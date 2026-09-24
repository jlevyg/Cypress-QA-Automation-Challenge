D-001: Practice Form accepts a future date of birth

Steps to reproduce

1. Open https://demoqa.com/automation-practice-form.
2. Fill in the required fields: First Name, Last Name, Gender and a 10-digit Mobile number.
3. Click the Date of Birth field and pick a date in the future (I used 24 September 2030).
4. Click Submit

Expected

The form doesn't submit. Date of Birth is marked as invalid and the user stays on the page. Ideally the date picker doesn't offer future dates at all.

Actual

The form submits. The "Thanks for submitting the form" modal shows Date of Birth: 24 September,2030.

Note on the test

The test asserts the current (wrong) behavior so the main suite stays green while the bug is open. When it's fixed, the test will fail. At that point it should be changed to assert that the future date is rejected.

D-002: State and City stay paired across a state change

Steps to reproduce

1. Open https://demoqa.com/automation-practice-form.
2. Scroll down to State and City.
3. Select State: NCR, then select City: Delhi.
4. Change State to Rajasthan (or Uttar Pradesh).
5. Fill in the required fields and click Submit.

Expected

Changing the State clears the selected City, so the user has to pick a city that belongs to the new state.

Actual

The City stays Delhi after the State changes. Submitting the form writes an impossible pair, such as Rajasthan and Delhi.
