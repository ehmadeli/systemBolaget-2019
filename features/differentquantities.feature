<<<<<<< HEAD
Feature:
As a user, I should be able to select different quantities
of a product to my shopping cart to have control on my shopping.
=======
Feature:As a user, I should be able to select different quantities of a product to my shopping cart to have control on my shopping.
>>>>>>> master

<<<<<<< HEAD

<<<<<<< HEAD
Scenario: successfully select different amount of the same product.
    Given the product is available in the shop
    When i click on the add button several times
    Then it should add as many products i want to the cart
=======
=======
>>>>>>> master
    Scenario: successfully add 1 quantity of products to the cart.
        Given the product is available in the shop
        When I add 1 unit of the product to the cart 
        Then it should be added 1 unit to the cart

    Scenario: successfully add 2 quantities of product to the cart.
        Given the product is available in the shop
        When I add 2 units of the product to the cart 
        Then it should be added 2 units to the cart

    Scenario: Should not be able to add 0 quantity of product to the cart.
        Given the product is available in the shop
        When I add 0 units of the product to the cart 
        Then it should not be added to the cart

>>>>>>> master

