Feature: As a user, I should be able to add the selected product into the shopping cart to be able to buy.

Scenario: Successfully add a product to the cart.
    Given that I am on the web page localhost:3306/categories.html
    When I click on add button 
    Then I should see the product in the cart

Scenario: Successfully add several products of the same type to the cart.
    Given that I am on the web page localhost:3306/categories.html
    When I click on add button 
    Then I should see the product in the cart

Scenario: Successfully add a product of different types to the cart.
    Given that I am on the web page localhost:3306/categories.html
    When I click on add button 
    Then I should see the product in the cart

Scenario: Successfully add at least two different products to the cart.
    Given that I am on the web page localhost:3306/categories.html
    When I click on add button 
    Then I should see the products in the cart

Scenario: Out of products
    Given that I am on the web page localhost:3306/categories.html
    When I click on add button 
    Then I should see the product in the cart
