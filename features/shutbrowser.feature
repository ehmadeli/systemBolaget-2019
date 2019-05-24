Feature: As a User, I should be able to shut down the browser and reopen it with the same shopping cart.

Scenario: Successfully be able to reopen with the same shopping cart even if browser is shut down
Given that I already have 3 products in my cart
When I click the refresh-button in my browser
And I reopen my browser
Then I should get the same shopping cart as previous

Scenario: Successfully be able to reopen with the same shopping cart even if i refresh the browser
Given that I already have 3 products in my cart
When I click the refresh-button in my browser
Then I should get the same shopping cart as previous
