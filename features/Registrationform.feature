Feature: As a user, I should be able to register my account into the localhost to by product from systembolaget.

    Scenario: Successfully open the registration page  
    Given that I am in signin page
     When user clickon register link 
     Then user should be in registration page

    Scenario: Successfully enter username in textbox 
        Given that I am in registration page
        When i input my name  in textbox
        When I  input  my password on textbox
        Then  name and password are enter Successfully in the textbox
     

    Scenario: Successfully register the account .
       Given that I am in registration page
        When I click register button
        Then registration should be Successfully

      Scenario:  Successfully enter new user name in textbox 
       Given that I am in signup page 
         When I  enter  new name on textbox
         When I  enter new password on textbox
         Then  new userpassword are enter Successfully.

        
        

    Scenario: Successfully register new  account .
       Given Given that i am  in registration page
        When I click on again register button 
        Then new registration should be Successfully

      

        




    













    






