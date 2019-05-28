Feature: As a User, I should be able to empty the entire shopping cart.

Scenario Outline: Succssfully empty the cart with <quantity> product in the shopping cart
    Given that there is <quantity> products in the cart
    When i click on the empty-cart button
    Then It should empty the cart 

Examples:
| quantity|
| 1       |
| 3       |
| 10      |