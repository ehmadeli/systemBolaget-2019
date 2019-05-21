Feature: As a User, I should be able to login  my account

Scenario: Succssfully login 
Given that I already have login page
When user enter username
When user enter password
And user  click on signing button
Then user should be logged in sucessfully

Scenario: UnSuccssfully  enter number in username
Given that I already have login page
When user enter  number in username textbox
When user enter password
And user  click on signing button
Then user should be logged in sucessfully

Scenario: UnSuccssfully  enter character in password
Given that I already have login page
When user enter username in textbox
When user enter text in password textbox
And user  click on signing button
Then user should be logged in sucessfully

