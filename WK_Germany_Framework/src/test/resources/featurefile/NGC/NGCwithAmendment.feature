Feature: Submission of metadata details to the NGC main record with addition amendment


@sanity @NGCBEGRAmendment
Scenario Outline:Submission of NGC BEGR record with amendment
When I Open the application
And I enter "<username>"
And I enter "<password>"
And I click on login button.
Then I verify login successful "<loginmessage>"
And I navigate to NGC BEGR record
And I enter circular letter "<issuedate>"
And I enter "<filename>"
And I click on submit button
And I select for new amendment
And I enter "<Update Date>" in the date field
And I click on "<submit>" button
Then I verify the "<NGCformsubmissionmessagewithamendment>" message
Then I click on logout button

Examples:
|username|password|loginmessage|issuedate|filename|NGCformsubmissionmessagewithamendment|
|test|test|test|test|test|test|test|
