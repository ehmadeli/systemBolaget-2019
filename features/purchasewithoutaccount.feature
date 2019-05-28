Feature:As a User, I must be able to make purchases without registering an account. (Payment is not made for real)

Scenario: successfully buy products without having an account 
Given that I am on the web page localhost:3306/cart.html
When I click on checkout button 
And I filled the form with customer detail
Then It should show me ordering page

Scenario: Successfully buy one product
Given that I am on the web page localhost:3306/cart.html
And  there is one product in the cart
When I click on checkout button 
And I filled the form with customer detail
And I click on order button 
Then It should show me ordering page

Scenario: Successfully buy two products
Given that I am on the web page localhost:3306/cart.html
And  there is two product in the cart
When I click on checkout button 
And I filled the form with customer detail
And I click on order button 
Then It should show me ordering page



