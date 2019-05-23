Feature: As a User, I should be able to overview the shopping cart / its contents.

Scenario: Successfully overview the shopping cart
Given that I am on the http://localhost:3306
And I searched for the products
And added to the cart
When I click on cart-button to overview it
Then I can see all the products in the cart and their details


Scenario: Successfully overview the total price of the products
Given that I am on the http://localhost:3306
And I searched for the products
And added 3 products to the cart
When I click on cart-button 
Then I can see the total price of products in the cart
