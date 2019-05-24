Feature:As a user, I should be able to adjust the quantity of a product anytime to fulfill my needs.

    Scenario: successfully decrease of the same product in the shopping cart
        Given The product is already in the shopping cart
        When i click on the minus-button
        Then it should decrease one product from the cart

    Scenario: successfully increase of the same product in the shopping cart
        Given The product is already in the shopping cart
        When I click on the plus-button for a product
        Then it should increase one product into the cart

    Scenario: successfully decrease of the different product in the shopping cart
         Given the different products are already in the shopping cart
         When i click on the minus-button on products
         Then it should decrease  products from the cart

      Scenario: successfully increase of the different product in the shopping cart
          Given the different products are already in the shopping cart
          When I click on the plus-button on products
          Then it should increase  products into the cart

     Scenario: The quantity of the product can never go below one if it does it is removed
         Given that there is already one product in the shopping cart
         When i click on minus-button once 
         Then the product should be removed from the cart