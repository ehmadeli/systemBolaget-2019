
Feature:As a user, I should be able to adjust the quantity of a product anytime to fulfill my needs.

Feature: As a user, I should be able to adjust the quantity of a product anytime to fulfill my needs.



    Scenario: successfully decrease of the same product in the shopping cart
        Given the product is already in the shopping cart
        When i press the minus button
        Then it should decrease one product from the cart

    Scenario: successfully increase of the same product in the shopping cart
        Given the product is already in the shopping cart
        When I increase the quantity for that product by one
        Then it should increase one product into the cart

    Scenario: successfully decrease of the same product in the shopping cart
        Given the product is already in the shopping cart
        When i decrease the quantity for that product by one
        Then it should decrease one product from the cart

    Scenario: successfully adjust amount of products in the shopping cart
        Given the product is already in the shopping cart
        When i type into textbox the amount of products 
        Then it should add as many products to the cart

    Scenario: The quantity of the product can never go below one if it does it is removed
        Given that there is already one product in the shopping cart
        When i decrease the quantity of that product by one 
        Then the product should be removed from the cart

