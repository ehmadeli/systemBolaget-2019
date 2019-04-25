Feature: As a User, I should be able to see an overview of the shopping cart / its contents.

Scenario: Successfully overview the shopping cart
Given that I have already products in the cart
When I click on the Cart button 
Then I can see all the products in the cart and their details
