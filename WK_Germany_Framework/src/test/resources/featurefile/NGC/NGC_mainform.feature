Feature: Submission of metadata details to the NGC main record

@sanity @BEGR
Scenario Outline:Submission of NGC BEGR record without amendment

When I Open the application
And I enter "<username>"
And I enter "<password>"
And I click on login button.
Then I verify login successful "<loginmessage>"
And I navigate to NGC BEGR record
And I enter circular letter "<issuedate>"
And I enter "<filename>"
And I click on submit button
Then I verify the "<NGCformsubmissionmessage>" message
Then I click on logoutbutton


Examples:
|username|password|loginmessage|issuedate|filename|NGCformsubmissionmessage|
|test|test|test|test|test|test|test|

@sanity @NGCVA
Scenario Outline:Submission of NGC BEGR record without amendment

When I Open the application
And I enter "<username>"
And I enter "<password>"
And I click on login button.
Then I verify login successful "<loginmessage>"
And I navigate to NGC VA record
And I enter circular letter "<issuedate>"
And I enter "<filename>"
And I click on submit button
Then I verify the "<NGCformsubmissionmessage>" message
Then I click on logout button

Examples:
|username|password|loginmessage|issuedate|filename|NGCformsubmissionmessage|
|test|test|test|test|test|test|test|


