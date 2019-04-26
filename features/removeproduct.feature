Feature:As a User, I should be able to remove a product from my shopping cart.

Scenario: successfully remove one product from the shopping cart
Given that a product is already in the shopping cart
When I remove the product from the cart
Then the cart should not contain the product

Scenario: successfully remove two/several products from the shopping cart
Given that there are two products in the shopping cart
When I remove the both products from the cart
Then the cart should not contain the products

