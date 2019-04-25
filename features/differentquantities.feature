Feature:
As a user, I should be able to select different quantities
of a product to my shopping cart to have control on my shopping.


Scenario: successfully select different amount of the same product.
    Given the product is available in the shop
    When i click on the add button several times
    Then it should add as many products i want to the cart

