Feature: Submission of metadata details to the GC main record
@sanity @GC
Scenario Outline:Submission of GC record without amendment

When I Open the application
And I enter "<username>"
And I enter "<username>"
And I click on login button.
Then I verify login successful "<loginmessage>"
And I navigate to GC main record page
And I Select "<Legislator>" on the GC form
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
Then I verify "<GCMainformsubmissionmessage>" message
Then i click on logout button

Examples:
|username|username|loginmessage|VersionType|EffectiveFrom|Priority|OfficialTitle|Dateofissue|Editorialshorttitle|Editorialabbreviation|Classificationnumber|formatoflaw|LegislationType|GCMainformsubmissionmessage|
|test|test|test|test|test|test|test|test|test|test|test|test|test|test|test|test|test|test|test|test|test|test|test|test|test|test|test|test|test|test|test|test|test|test|