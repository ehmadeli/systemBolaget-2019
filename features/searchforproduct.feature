<<<<<<< HEAD
Feature:
As a user, I should be able to search
for a product so that i can find it easily.
=======
Feature: As a user, I should be able to search for a product so that i can find it easily.
<<<<<<< HEAD
>>>>>>> master

<<<<<<< HEAD
Scenario: Successfully search for a product.
    Given that there is a product in the shop.
    When I search the product with the product number
    Then this product comes up in the list
=======
    Scenario: Successfully search for products by name.
=======

    Scenario: Successfully search for products by 'name'.
>>>>>>> master
        Given that i am searching by a partial name
        When I search the product 
        Then i should get a list of products with names that matches the 'namn'

    Scenario: Successfully search for products by 'name2'.
        Given that i am searching by a partial name
        When I search the product 
        Then i should get a list of products with names that matches the 'namn2'

    Scenario: Successfully search for products by product number.
        Given that i am searching by a varnummer.
        When I search the product 
<<<<<<< HEAD
        Then i should get a list of products with names that matches with product number
>>>>>>> master

Scenario: Product not found.
    Given that there is no product left in the shop.
    When I search the product with the product number
    Then it displayed the message 'Product not found'
=======
        Then i should get a list of products with names that matches with 'varnummer'

    Scenario: Product not found.
        Given that there is no product in the shop.
        When I search the product 
        Then it displayed the message Product not found
>>>>>>> master





