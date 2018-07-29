Feature: Submission of metadata details to the Case main record
@Casemainrecord @sanity
Scenario Outline:Submission of CASE record and initition of the workflow

When I Open the application
And I enter "<username>"
And I enter "<Password>"
And I click on login button.
Then I verify login successful "<loginmessage>"
And I navigate to Case main record page
And I Select "<Court>" value on case mainform
And I Select "<Location>" value on case mainform
And I Enter "<DecisionDate>" value on case mainform
And I Enter "<Referencenumber>" value on case mainform
And I enter "<Body>" value on case mainform
And I enter "<Register>" value on case mainform 
And I enter "<LFDno>" value on case mainform
And I enter "<Year>" value on case main form
And I select "<DecisionType>" value on case main form
And I checkedin "<fileacquistion>" value on case main form
And I select "<priority>" on case main form
And I select sourcedocument from "<sourcedocumentpath>" path
And I click on submit button
Then I verify the "<CaseMainformSubmissionMessage>" message
Then I click on Logut Button

Examples:
|username|Password|loginmessage|Court|Location|DecisionDate|Referencenumber|Body|Register|LFDno|Year|DecisionType|fileacquistion|priority|sourcedocumentpath|CaseMainformSubmissionMessage|
|test|test|test|test|test|test|test|test|test|test|test|test|test|test|test|test|test|test|test|test|test|test|test||test|

Scenario Outline:Verify the filename of the case record

When I Open the application
And I enter "<username>"
And I enter "<Password>"
And I click on login button.
Then I verify login successful "<loginmessage>"
And I navigate to Case main record page
And I Select "<Court>" value on case mainform
And I Select "<Location>" value on case mainform
And I Enter "<DecisionDate>" value on case mainform
And I Enter "<Referencenumber>" value on case mainform
And I enter "<Body>" value on case mainform
And I enter "<Register>" value on case mainform 
And I enter "<LFDno>" value on case mainform
And I enter "<Year>" value on case main form
And I select "<DecisionType>" value on case main form
And I click on "<filename>" tooltip
Then I verify the "<GeneratedFilename>"
Then I Click on Logout Button

Examples:
|username|Password|loginmessage|Court|Location|DecisionDate|Referencenumber|Body|Register|LFDno|Year|DecisionType|GeneratedFilename|
|test|test|test|test|test|test|test|test|test|test|test|test|test|test|