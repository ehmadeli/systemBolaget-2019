Feature: As a user, I should be able to add the selected product into the shopping cart to be able to buy.

Scenario: Successfully add a product to the cart.
    Given that I am on the web page localhost:3306
    When I click on add-to button 
    Then I should see the product in the cart

Scenario: Successfully add several products of the same type to the cart.
    Given that I am on the web page localhost:3306
    When I click on add-to button 3 times
    Then I should see the product in the cart

Scenario: Successfully add a product of different types to the cart.
    Given that I am on the web page localhost:3306
    When I click on add-to button 
    Then I should see the product in the cart

Scenario: Successfully add at least two different products to the cart.
    Given that I am on the web page localhost:3306
    When I click on add-to button 
    And i click again one other product's add-to cart button
    Then I should see the product in the cart

Scenario: Out of products
    Given that I am on the web page localhost:3306
    When I click to add-to button 
    Then it does not allow me to add this product to cart
    And I should see the product in the cart
