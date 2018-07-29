Feature: Search functionality of caserecord from lookup table

@searchconceptid @sanity
Scenario Outline:Search functionality on case lookup page using concept id

When I Open the application
And I enter "<username>"
And I enter "<Password>"
And I click on login button.
Then I verify login successful "<loginmessage>"
And I Navigate to Case lookup page
And I Enter "<conceptid>" on the conceptid search textbox
And I click on Apply button
Then I verify the search result
Then i click on logout button

Examples:
|username|password|loginmessage|conceptid|
|test|test|test|test|test|

@searchcaseid @sanity
Scenario Outline:Search functionality on case lookup page using concept id

When I Open the application
And I enter "<username>"
And I enter "<Password>"
And I click on login button.
Then I verify login successful "<loginmessage>"
And I Navigate to Case lookup page
And I Enter "<CaseID>" on the conceptid search textbox
And I click on Apply button
Then I verify the search result
Then i click on logout button

Examples:
|username|password|loginmessage|CaseID|
|test|test|test|test|test|



