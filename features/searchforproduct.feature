Feature: As a user, I should be able to search for a product so that i can find it easily.

    Scenario: Successfully search for products by properties.
        Given that i am on the page localhost:3306
        When I search for "canella"
        Then i should get a list of products with names that matches