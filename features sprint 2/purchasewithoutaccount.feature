Feature:As a User, I must be able to make purchases without registering an account. (Payment is not made for real)

Scenario: successfully buy products without having an account 
Given that I have added the product/products in the shopping cart
When I click on 'buy-without-account' button 
Then It should show me ordering page

Scenario: Successfully buy products from ordering page
Given that I am already on the ordering page
When I fill up the form with correct customer detail
And click on buy-button in the ordering page 
Then It should take my order

Scenario: UnSuccessful to buy products from ordering page
Given that I am already on the ordering page
And I have filled up incorrect/incomplete customer detail
When I click on buy-button in the ordering page 
Then It should show me error information given by you is incorrect/incomplete

