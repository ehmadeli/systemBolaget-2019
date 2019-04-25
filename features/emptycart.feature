Feature:
As a User, I should be able to
empty the entire shopping cart.

Scenario: Succssfully empty the whole shopping cart
Given that there are already several products in the cart
When i click on the empty shopping cart button
Then It should remove all the products from the cart