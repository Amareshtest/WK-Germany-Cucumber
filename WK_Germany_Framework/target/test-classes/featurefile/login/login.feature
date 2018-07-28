@tag
Feature: Login to the application.
check the login page

Scenario Outline: Login to the application with valid username and valid password
Given I navigate to the application
When I enter "<username>" to username textbox
And I enter "<password>" to password textbox
And I click the login button
Then I verify login success 
Then I click on logout button

Examples:
|username|password|
|Arun|arun@1234|


Scenario Outline:Login to the application with invalid username and invalid password

Given I navigate to the application
When I enter "<Username>" to username textbox
And I enter "<password>" to password textbox
And I click the login button
Then I verify login success 

Examples:
|Username|password|
|Arun|test@1234|