Feature: Pagetitle verification

@pagetitleverification @sanity
Scenario Outline: verify the pagetitle after login page

Given user has loggedin to the application
When verify the "<pagetitle>"
Then pagetitle verification is successful

Examples:
|pagetitle|
|Dashboard|