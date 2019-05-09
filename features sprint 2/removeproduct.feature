Feature: As a User, I should be able to remove a product from my shopping cart.

Scenario: successfully remove a product from the shopping cart
Given that product is already in the shopping cart
When I click on the remove button in the shopping cart
Then It should be removed from the shopping cart

Scenario: successfully remove several different products from the shopping cart
Given that there are several different products in the shopping cart
When I click on remove-button for each product
Then products should be removed from the shopping cart

