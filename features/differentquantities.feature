Feature:As a user, I should be able to select different quantities of a product to my shopping cart to have control on my shopping.


    Scenario: successfully add 1 quantity of products to the cart.
        Given the product is available in the shop
        When I add 1 unit of the product to the cart 
        Then it should be added to the cart

    Scenario: successfully add 2 quantities of product to the cart.
        Given the product is available in the shop
        When I add 2 units of the product to the cart 
        Then it should be added to the cart

    Scenario: Should not be able to add 0 quantity of product to the cart.
        Given the product is available in the shop
        When I add 0 units of the product to the cart 
        Then it should not be added to the cart


