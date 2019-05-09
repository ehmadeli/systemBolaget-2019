Feature: As a User, I should be able to empty the entire shopping cart.

Scenario: Succssfully empty the cart with one product in the shopping cart
Given that there is already one product in the cart
When i click on the empty-cart button
Then It should empty the cart 

Scenario: Succssfully empty the cart with several products in the cart
Given that there are already several different products in the cart
When i click on the empty-cart button
Then It should empty the cart