Feature: As a User, I should be able to login my account

    Scenario: Succssfully login
        Given that I am on the web page localhost:3306
        And I have entered correct username
        And I have entered correct password
        When I click on signin button
        Then it should be login Succssfully



