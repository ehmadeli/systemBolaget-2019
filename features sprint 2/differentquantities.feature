Feature:As a user, I should be able to select different quantities of a product to my shopping cart to have control on my shopping.

    Scenario: successfully add 1 quantity of the same product to the cart.
        Given the product is available in the shop
        When I type 1 into text box
        And i press enter button
        Then it should be added 1 unit to the cart of the same product

    Scenario: successfully add atleast 2 quantities of the same product to the cart.
        Given the product is available in the shop
        When I type 2 or more units in the text box 
        And i press enter button
        Then it should be added 2 units to the cart of the same product

    Scenario: successfully add different quantities of the different products to the cart.
        Given the different products are available in the shop
        When I type different units into the text box for different products 
        And i press enter button
        Then it should be added different units to the cart of the different products

