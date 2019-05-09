Feature: As a User, I should be able to see an overview of the shopping cart / its contents.

Scenario: Successfully overview the shopping cart
Given that I already have products in the cart
When I click on cart-button 
Then I can see all the products in the cart and their details

Scenario: Successfully overview the total price of the products
Given that I already have products in the cart
When I click on cart-button 
Then I can see the total price of products in the cart

Scenario: Successfully overview the new total price of the products
Given that I already have products in the cart
When I change the quantities of the products 
Then I can see new total price of products in the cart
