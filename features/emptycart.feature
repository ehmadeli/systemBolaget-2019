Feature: As a User, I should be able to empty the entire shopping cart.

Scenario: Succssfully empty the cart with 1 product in the shopping cart
Given that there is 1 product in the cart
When i click on the empty-cart button
Then It should empty the cart 

Scenario: Succssfully empty the cart with 2 different products in the cart
Given that there is 2  products in the cart
When i click on the empty-cart button
Then It should empty the cart

Scenario: Succssfully empty the cart with 100 different products in the cart
Given that there is  100  products in the cart
When i click on the empty-cart button
Then It should empty the cart