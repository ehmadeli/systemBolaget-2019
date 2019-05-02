Feature: As a user, I should be able to search for a product so that i can find it easily.

    Scenario: Successfully search for products by namn.
        Given that i am searching by a partial namn
        When I search the product 
        Then i should get a list of products with names that matches the 'namn'

    Scenario: Successfully search for products by namn2.
        Given that i am searching by a partial namn2
        When I search the product 
        Then i should get a list of products with names that matches the 'namn2'

    Scenario: Successfully search for products by product number.
        Given that i am searching by a varnummer.
        When I search the product 
        Then i should get a list of products with names that matches with 'varnummer'

    Scenario: Product not found.
        Given that there is no product in the shop.
        When I search the product 
        Then it displayed the message Product not found





