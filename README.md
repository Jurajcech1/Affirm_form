# AffirmInputs

This was generated with the latest versions of Angular CLI and Angular Material.  If the Angular CLI is downloaded, then all one has to do is pull this repository, run `npm install`, and then run `ng serve`.

## Question Answers

1. I spent the 2.5 hours actually developing the code and about 20 minutes thinking about framework choice and how I was going to try to potentially improve upon the design.
2. I decided to go with Angular Material for styling and ease of customer use.  The validations are clear and the inputs and date picker are clean and easily understandable.  I went for minimum "clicks" for the user while still maintaining usability and functionality.
3. The API submission would probably be a POST to an endpoint something like `/payment` with a body like `{payment:{name: string, cardNumber: integer, cvv2: integer, expirationDate: datetime}}`.  Validation errors that come back from the API would probably best be displayed in a human-readable way in a red banner above the form.
4. I think that the design focus for these kinds of forms is to minimize time spent inputting the data.  As an example, I went with the date picker rather than separate text or dropdowns for the month expiration date and the year expiration date.  Ultimately, we want the customer to spend as little time in checkout as possible so that they can keep shopping and so that they don't think of their checkout experience as a hindrance to using our product.
