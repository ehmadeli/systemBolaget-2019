
Feature: As a User, I should be able to remove a product from my shopping cart.

Scenario: successfully remove a product from the shopping cart
Given that a product is already in the shopping cart
When I click on the remove button
Then all products should be removed from the shopping cart

Scenario: successfully remove two different products from the shopping cart
Given that there are two different products in the shopping cart
When I click on remove button for each product
Then all products should be removed from the shopping cart 

Scenario: successfully remove one of two different products from the shopping cart
Given that there are two different products in the shopping cart
When I click on remove button for one of the two different products
Then the shopping cart should not contain the removed product anymore





