Feature: As a user, I should be able to register my account into the localhost to by product from systembolaget.

    

    Scenario: Successfully  register the account 
        Given that I am in registration page
        When i input my name  in textbox
        When I  input  my password on textbox
        Then  it should be signup Successfully
     

    Scenario: unSuccessfully register the account .
       Given that I am in registration page
       When i input same username  in textbox
        When i input same password  in textbox
        Then It should be signup unSuccessfully

      
        
        

    

      

        




    













    






