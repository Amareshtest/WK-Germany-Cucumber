Feature: Submission of metadata details to the GC main record
@sanity @GC
Scenario Outline:Submission of GC record without amendment

When I Open the application
And I enter "<username>"
And I enter "<username>"
And I click on login button.
Then I verify login successful "<loginmessage>"
And I Select "<Legislator>" on the GC form
And I Navigate to GC main record page
And I click on filename tooltip
And I Select "<VersionType>" on the GC form
And I enter "<EffectiveFrom>" on the GC form
And I Select "<Priority>" on the GC form
And I enter "<OfficialTitle>" on the GC form
And I enter "<Dateofissue>" on the GC form
And I enter "<Editorialshorttitle>" on the GC form
And I enter "<Editorialabbreviation>" on the GC form
And I enter "<Classificationnumber>" on the GC form
And I Select "<formatoflaw>" on the GC form
And I Select "<LegislationType>" on the GC form
And I click on submit button
And I click for new amendment 
And I enter "<publisheddate>" on the amendment form
And I click on submit button
Then i verify "<GCamendmentmessage>"
Then I click on logout button


Examples:
|username|username|loginmessage|VersionType|EffectiveFrom|Priority|OfficialTitle|Dateofissue|Editorialshorttitle|Editorialabbreviation|Classificationnumber|formatoflaw|LegislationType|publisheddate|GCamendmentmessage|
|test|test|test|test|test|test|test|test|test|test|test|test|test|test|test|test|test|test|test|test|test|test|test|test|test|test|test|test|test|test|test|test|test|test|test|test|