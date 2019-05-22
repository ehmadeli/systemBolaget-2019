Feature: As a user, I should be able to add the selected product into the shopping cart to be able to buy the product

Scenario: Successfully add one product to the cart
Given that the products are available in the store
When I add one product to the cart
Then i should see the product in the cart

Scenario: Successfully add at least two different products to the cart
 Given that the products are available in the store
When I add one product to the cart
And I add one other product to the cart
Then I should see the products in the cart

Scenario: Out of products
Given that the products are available in the store
Given I add one product that is out of stock to the cart
Then the page should show a message
