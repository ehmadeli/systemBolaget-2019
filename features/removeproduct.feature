<<<<<<< HEAD
<<<<<<< HEAD
Feature: 
As a User, I should be able to remove 
=======
=======

Feature: As a User, I should be able to remove a product from my shopping cart.

>>>>>>> master
Feature:As a User, I should be able to remove 
>>>>>>> master
a product from my shopping cart.


Scenario: successfully remove product from the shopping cart
Given that product is already in the shopping cart
When I click on the remove button in the shopping cart
Then It should be removed from the shopping cart

Scenario: successfully remove two/several products from the shopping cart
Given that there are two products in the shopping cart
When I remove the both products from the cart
Then the cart should not contain the products

