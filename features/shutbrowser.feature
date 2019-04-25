<<<<<<< HEAD
Feature: As a User, I should be able to shut down the browser and reopen it with the same shopping cart.
=======
Feature:As a User, I should be able to shut down the browser and reopen it with the same shopping cart.
>>>>>>> master

Scenario: Successfully be able to reopen with the same shopping cart even if browser is shut down
Given that I already have products in my cart
When I close my browser
And I reopen my browser
Then I should get the same shopping cart as previous

Scenario: Successfully be able to reopen with the same shopping cart even if i refresh the browser
Given that I already have products in my cart
When I refresh my browser
Then I should get the same shopping cart as previous
