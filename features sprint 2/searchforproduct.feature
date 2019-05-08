Feature: As a user, I should be able to search for a product so that i can find it easily.

    Scenario: Successfully search for products by namn.
        Given that i am searching by a partial or full namn.
        When I search for the product 
        Then i should get a list of products with names that matches the properties
        And if no products found it should say no products found

   
