$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("featurefile/login/login.feature");
formatter.feature({
  "line": 2,
  "name": "Login to the application.",
  "description": "check the login page",
  "id": "login-to-the-application.",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Login to the application with valid username and valid password",
  "description": "",
  "id": "login-to-the-application.;login-to-the-application-with-valid-username-and-valid-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I navigate to the application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter \"\u003cusername\u003e\" to username textbox",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter \"\u003cpassword\u003e\" to password textbox",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click the login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I verify login success",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I click on logout button",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "login-to-the-application.;login-to-the-application-with-valid-username-and-valid-password;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 14,
      "id": "login-to-the-application.;login-to-the-application-with-valid-username-and-valid-password;;1"
    },
    {
      "cells": [
        "Arun",
        "arun@1234"
      ],
      "line": 15,
      "id": "login-to-the-application.;login-to-the-application-with-valid-username-and-valid-password;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5272943270,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Login to the application with valid username and valid password",
  "description": "",
  "id": "login-to-the-application.;login-to-the-application-with-valid-username-and-valid-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I navigate to the application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter \"Arun\" to username textbox",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter \"arun@1234\" to password textbox",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click the login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I verify login success",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I click on logout button",
  "keyword": "Then "
});
formatter.match({
  "location": "WKGLogin.i_navigate_to_the_application()"
});
formatter.result({
  "duration": 19824204278,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Arun",
      "offset": 9
    }
  ],
  "location": "WKGLogin.i_enter_to_username_textbox(String)"
});
formatter.result({
  "duration": 149070919,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "arun@1234",
      "offset": 9
    }
  ],
  "location": "WKGLogin.i_enter_to_password_textbox(String)"
});
formatter.result({
  "duration": 153248661,
  "status": "passed"
});
formatter.match({
  "location": "WKGLogin.i_click_the_login_button()"
});
formatter.result({
  "duration": 38653565578,
  "status": "passed"
});
formatter.match({
  "location": "WKGLogin.i_verify_login_success()"
});
formatter.result({
  "duration": 43180,
  "status": "passed"
});
formatter.match({
  "location": "WKGLogin.i_click_on_logout_button()"
});
formatter.result({
  "duration": 25548148392,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat com.cucumber.framework.stepdefinition.Login.WKGLogin.i_click_on_logout_button(WKGLogin.java:51)\r\n\tat ✽.Then I click on logout button(featurefile/login/login.feature:11)\r\n",
  "status": "pending"
});
formatter.write("Finished Scenario");
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 578653057,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "Login to the application with invalid username and invalid password",
  "description": "",
  "id": "login-to-the-application.;login-to-the-application-with-invalid-username-and-invalid-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "I navigate to the application",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I enter \"\u003cUsername\u003e\" to username textbox",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I enter \"\u003cpassword\u003e\" to password textbox",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click the login button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I verify login success",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "login-to-the-application.;login-to-the-application-with-invalid-username-and-invalid-password;",
  "rows": [
    {
      "cells": [
        "Username",
        "password"
      ],
      "line": 27,
      "id": "login-to-the-application.;login-to-the-application-with-invalid-username-and-invalid-password;;1"
    },
    {
      "cells": [
        "Arun",
        "test@1234"
      ],
      "line": 28,
      "id": "login-to-the-application.;login-to-the-application-with-invalid-username-and-invalid-password;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3377285048,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Login to the application with invalid username and invalid password",
  "description": "",
  "id": "login-to-the-application.;login-to-the-application-with-invalid-username-and-invalid-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I navigate to the application",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I enter \"Arun\" to username textbox",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I enter \"test@1234\" to password textbox",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click the login button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I verify login success",
  "keyword": "Then "
});
formatter.match({
  "location": "WKGLogin.i_navigate_to_the_application()"
});
formatter.result({
  "duration": 35610771862,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Arun",
      "offset": 9
    }
  ],
  "location": "WKGLogin.i_enter_to_username_textbox(String)"
});
formatter.result({
  "duration": 182707220,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@1234",
      "offset": 9
    }
  ],
  "location": "WKGLogin.i_enter_to_password_textbox(String)"
});
formatter.result({
  "duration": 145164085,
  "status": "passed"
});
formatter.match({
  "location": "WKGLogin.i_click_the_login_button()"
});
formatter.result({
  "duration": 4081761818,
  "status": "passed"
});
formatter.match({
  "location": "WKGLogin.i_verify_login_success()"
});
formatter.result({
  "duration": 66314,
  "status": "passed"
});
formatter.write("Finished Scenario");
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 452319914,
  "status": "passed"
});
});