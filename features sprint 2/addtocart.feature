Feature: As a user, I should be able to add the selected product into the shopping cart to be able to buy the product

    Scenario: Successfully add a product to the cart.
        Given that a product is available in the shop
        When I click on add-to button 
        Then it should be added to the cart

    Scenario: Successfully add at least two different products to the cart.
        Given that a products are available in the shop
        When I add one product into the cart
        And i add one other product to the cart
        Then the two different products should be added to the cart

    Scenario: Out of products
        Given that there is a product that is out of stock
        When I try to add that product
        Then page should say 'Out of stock'







