Feature: As a user, I should be able to add the selected product into the shopping cart to be able to buy the product

    Scenario: Successfully add a product to the cart.
        Given that a product is available in the shop
        When I click on add-to button 
        Then it should be added to the cart

    Scenario: Successfully add several products of the same type to the cart.
        Given that a product is available in the shop
        When I click on add-to button 3 times
        Then it should be added to the cart

    Scenario: Successfully add a product of different types to the cart.
        Given that different products are available in the shop
        When I click on add-to button 
        Then this different product should be added to the cart

    Scenario: Successfully add at least two different products to the cart.
        Given that a different products are available in the shop
        When I click on add-to button 
        And i click again one other product's add-to cart button
        Then the two different products should be added to the cart

    Scenario: Out of products
        Given that there is a product in the shop that is out of stock
        When I click to add-to button 
        Then it does not allow to add to cart
        And it shows message this product is out of stock






