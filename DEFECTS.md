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