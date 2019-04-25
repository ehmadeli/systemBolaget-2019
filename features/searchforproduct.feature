Feature:
As a user, I should be able to search
for a product so that i can find it easily.

Scenario: Successfully search for a product.
    Given that there is a product in the shop.
    When I search the product with the product number
    Then this product comes up in the list

Scenario: Product not found.
    Given that there is no product left in the shop.
    When I search the product with the product number
    Then it displayed the message 'Product not found'





