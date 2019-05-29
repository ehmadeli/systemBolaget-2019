Feature:As a User, I must be able to make purchases without registering an account. (Payment is not made for real)

Scenario: Successfully buy differtent products
Given there are two products in the cart
And that I am on the web page localhost:3306/cart.html
When I click on checkout button 
And I filled the form with customer detail
And I click on order button 
Then It should show me ordering page


