Feature:As a user, I should be able to adjust the quantity of a product anytime to fulfill my needs.


    Scenario: successfully decrease of the same product in the shopping cart
        Given the product is already in the shopping cart
        When i press the minus button
        Then it should decrease one product from the cart

    Scenario: successfully increase of the same product in the shopping cart
        Given the product is already in the shopping cart
        When I press the plus button
        Then it should increase one product into the cart

    Scenario: successfully adjust amount of products in the shopping cart
        Given the product is already in the shopping cart
        When i type into textbox the amount of products 
        Then it should add as many products to the cart

    Scenario: The quantity of the product can never go below one if it does it is removed
        Given the product is already in the shopping cart
        When i type the number of amount to zero in the shopping cart
        Then it should be removed from the cart

