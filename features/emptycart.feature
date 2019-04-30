Feature: As a User, I should be able to empty the entire shopping cart.
>>>>>>> master

Scenario: Succssfully empty the cart with one product in the shopping cart
Given that there is already one product in the cart
When i remove the product from the shopping cart
Then It should not contain any product

Scenario: Succssfully empty the whole shopping cart with several products in the cart
Given that there are already several products in the cart
When i remove all the products from shopping cart button
Then It should not contain any products