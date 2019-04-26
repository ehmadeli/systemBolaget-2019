
Feature:As a User, I must be able to make purchases without registering an account. (Payment is not made for real)

Feature: As a User, I must be able to make purchases without registering an account. (Payment is not made for real)


Scenario: Successfully come to ordering page  
Given that I have added the product in the shopping cart
When I buy the products 
Then I should come to the ordering page

Scenario: successfully buy a product without having an account
Given that I am already on the ordering page 
When I fill up the ordering page
And I buy the products by 'without registration'
Then It should confirm me product is ordered 

