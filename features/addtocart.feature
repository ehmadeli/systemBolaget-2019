<<<<<<< HEAD
Feature: As a user, I should be able to add the selected product into the shopping cart to be able to buy the product.
=======
Feature: As a user, I should be able to add the selected product into the shopping cart to be able to buy the product
>>>>>>> master

    Scenario: Successfully add a product to the cart.
        Given that a product is available in the shop
        When I select the product
        And put it in the cart
        Then it should apear in the cart







