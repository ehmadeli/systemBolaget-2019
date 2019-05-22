Feature:As a user, I should be able to adjust the quantity of a product anytime to fulfill my needs.

    Scenario: successfully decrease of the same product in the shopping cart
        Given the product is already in the shopping cart
        When i click on the minus-button
        Then it should decrease one product from the cart

    Scenario: successfully increase of the same product in the shopping cart
        Given the product is already in the shopping cart
        When I click on the plus-button for a product
        Then it should increase one product into the cart

    Scenario: successfully decrease of the different product in the shopping cart
        Given the different products are already in the shopping cart
        When i click on the minus-button
        Then it should decrease one product from the cart

    Scenario: successfully increase of the different product in the shopping cart
        Given the different products are already in the shopping cart
        When I click on the plus-button
        Then it should increase one product into the cart

    # Scenario: successfully adjust amount of same product in the shopping cart
    #     Given the product is already in the shopping cart
    #     When i type into textbox the amount of products 
    #     Then it should add as many products to the cart

    # Scenario: successfully adjust amount of different products in the shopping cart
    #     Given the products are already in the shopping cart
    #     When i type into textbox the amount of products for each product 
    #     Then it should add as many products to the cart

    Scenario: The quantity of the product can never go below one if it does it is removed
        Given that there is already one product in the shopping cart
        When i click on minus-button once 
        Then the product should be removed from the cart

    Scenario: The quantity of the product can never be below one if it does it is removed
        Given that there is already atleast two units of a product in the shopping cart
        When i type zero into the textbox 
        Then the product should be removed from the cart

