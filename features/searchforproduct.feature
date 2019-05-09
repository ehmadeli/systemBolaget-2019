Feature: As a user, I should be able to search for a product so that i can find it easily.

    Scenario: Successfully search for products by properties.
        Given that i am searching by a partial or full name.
        When I search for names or partial names that exist
        Then i should get a list of products with names that matches the properties

    Scenario: UnSuccessfully search for products by properties.
        Given that i am searching by a partial or full name.
        When I search for names or partial names that does not exist
        Then i should get no products found back

