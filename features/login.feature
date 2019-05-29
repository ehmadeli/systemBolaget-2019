Feature: As a User, I should be able to login my account

    Scenario: Succssfully login
        Given that I am on the login page
        And I  entered correct username
        And I entered correct password
        When I click on sign in button
        Then it should be login Succssfully

        Scenario: unSuccssfully login
        Given that I am on the login page
        Given I entered wrong username
        Given I entered wrong password
        When I click on sign in button
        Then it should be login unSuccssfully



