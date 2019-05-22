Feature: As a User, I should be able to remove a product from my shopping cart.

Scenario: successfully remove a product from the shopping cart
Given that product is already in the shopping cart
When I click on the remove button in the shopping cart
Then It should be removed from the shopping cart

Scenario: successfully remove products with 2 units from the shopping cart
Given that there are 2 units in the shopping cart
When I click on remove-button for each product
Then products should be removed from the shopping cart

Scenario: successfully remove two products from the shopping cart
Given that there are two different products in the shopping cart
When I click on remove-button for each product
Then the shopping cart should not contain any products 


