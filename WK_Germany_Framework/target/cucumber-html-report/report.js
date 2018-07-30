$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("featurefile/Cases/CaseMainform.feature");
formatter.feature({
  "line": 1,
  "name": "Submission of metadata details to the Case main record",
  "description": "",
  "id": "submission-of-metadata-details-to-the-case-main-record",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Submission of CASE record and initition of the workflow",
  "description": "",
  "id": "submission-of-metadata-details-to-the-case-main-record;submission-of-case-record-and-initition-of-the-workflow",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Casemainrecord"
    },
    {
      "line": 2,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I Open the application",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I enter \"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on login button.",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I verify login successful \"\u003cloginmessage\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I navigate to Case main record page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I Select \"\u003cCourt\u003e\" value on case mainform",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I Select \"\u003cLocation\u003e\" value on case mainform",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I Enter \"\u003cDecisionDate\u003e\" value on case mainform",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I Enter \"\u003cReferencenumber\u003e\" value on case mainform",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter \"\u003cBody\u003e\" value on case mainform",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter \"\u003cRegister\u003e\" value on case mainform",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter \"\u003cLFDno\u003e\" value on case mainform",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter \"\u003cYear\u003e\" value on case main form",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I select \"\u003cDecisionType\u003e\" value on case main form",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I checkedin \"\u003cfileacquistion\u003e\" value on case main form",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select \"\u003cpriority\u003e\" on case main form",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select sourcedocument from \"\u003csourcedocumentpath\u003e\" path",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I verify the \"\u003cCaseMainformSubmissionMessage\u003e\" message",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I click on Logut Button",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "submission-of-metadata-details-to-the-case-main-record;submission-of-case-record-and-initition-of-the-workflow;",
  "rows": [
    {
      "cells": [
        "username",
        "Password",
        "loginmessage",
        "Court",
        "Location",
        "DecisionDate",
        "Referencenumber",
        "Body",
        "Register",
        "LFDno",
        "Year",
        "DecisionType",
        "fileacquistion",
        "priority",
        "sourcedocumentpath",
        "CaseMainformSubmissionMessage"
      ],
      "line": 28,
      "id": "submission-of-metadata-details-to-the-case-main-record;submission-of-case-record-and-initition-of-the-workflow;;1"
    },
    {
      "cells": [
        "test",
        "test",
        "test",
        "test",
        "test",
        "test",
        "test",
        "test",
        "test",
        "test",
        "test",
        "test",
        "test",
        "test",
        "test",
        "test",
        "test",
        "test",
        "test",
        "test",
        "test",
        "test",
        "test",
        "",
        "test"
      ],
      "line": 29,
      "id": "submission-of-metadata-details-to-the-case-main-record;submission-of-case-record-and-initition-of-the-workflow;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9848032883,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Submission of CASE record and initition of the workflow",
  "description": "",
  "id": "submission-of-metadata-details-to-the-case-main-record;submission-of-case-record-and-initition-of-the-workflow;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@sanity"
    },
    {
      "line": 2,
      "name": "@Casemainrecord"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I Open the application",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I enter \"test\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter \"test\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on login button.",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I verify login successful \"test\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I navigate to Case main record page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I Select \"test\" value on case mainform",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I Select \"test\" value on case mainform",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I Enter \"test\" value on case mainform",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I Enter \"test\" value on case mainform",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter \"test\" value on case mainform",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter \"test\" value on case mainform",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter \"test\" value on case mainform",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter \"test\" value on case main form",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I select \"test\" value on case main form",
  "matchedColumns": [
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I checkedin \"test\" value on case main form",
  "matchedColumns": [
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select \"test\" on case main form",
  "matchedColumns": [
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select sourcedocument from \"test\" path",
  "matchedColumns": [
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I verify the \"test\" message",
  "matchedColumns": [
    15
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I click on Logut Button",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.write("Finished Scenario");
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 541417327,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 31,
  "name": "Verify the filename of the case record",
  "description": "",
  "id": "submission-of-metadata-details-to-the-case-main-record;verify-the-filename-of-the-case-record",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 33,
  "name": "I Open the application",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "I enter \"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click on login button.",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I verify login successful \"\u003cloginmessage\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "I navigate to Case main record page",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I Select \"\u003cCourt\u003e\" value on case mainform",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I Select \"\u003cLocation\u003e\" value on case mainform",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I Enter \"\u003cDecisionDate\u003e\" value on case mainform",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I Enter \"\u003cReferencenumber\u003e\" value on case mainform",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I enter \"\u003cBody\u003e\" value on case mainform",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I enter \"\u003cRegister\u003e\" value on case mainform",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I enter \"\u003cLFDno\u003e\" value on case mainform",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I enter \"\u003cYear\u003e\" value on case main form",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I select \"\u003cDecisionType\u003e\" value on case main form",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I click on \"\u003cfilename\u003e\" tooltip",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I verify the \"\u003cGeneratedFilename\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "I Click on Logout Button",
  "keyword": "Then "
});
formatter.examples({
  "line": 52,
  "name": "",
  "description": "",
  "id": "submission-of-metadata-details-to-the-case-main-record;verify-the-filename-of-the-case-record;",
  "rows": [
    {
      "cells": [
        "username",
        "Password",
        "loginmessage",
        "Court",
        "Location",
        "DecisionDate",
        "Referencenumber",
        "Body",
        "Register",
        "LFDno",
        "Year",
        "DecisionType",
        "GeneratedFilename"
      ],
      "line": 53,
      "id": "submission-of-metadata-details-to-the-case-main-record;verify-the-filename-of-the-case-record;;1"
    },
    {
      "cells": [
        "test",
        "test",
        "test",
        "test",
        "test",
        "test",
        "test",
        "test",
        "test",
        "test",
        "test",
        "test",
        "test",
        "test"
      ],
      "line": 54,
      "id": "submission-of-metadata-details-to-the-case-main-record;verify-the-filename-of-the-case-record;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3514433953,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "Verify the filename of the case record",
  "description": "",
  "id": "submission-of-metadata-details-to-the-case-main-record;verify-the-filename-of-the-case-record;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 33,
  "name": "I Open the application",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "I enter \"test\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter \"test\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click on login button.",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I verify login successful \"test\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "I navigate to Case main record page",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I Select \"test\" value on case mainform",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I Select \"test\" value on case mainform",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I Enter \"test\" value on case mainform",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I Enter \"test\" value on case mainform",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I enter \"test\" value on case mainform",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I enter \"test\" value on case mainform",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I enter \"test\" value on case mainform",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I enter \"test\" value on case main form",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I select \"test\" value on case main form",
  "matchedColumns": [
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I click on \"\u003cfilename\u003e\" tooltip",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I verify the \"test\"",
  "matchedColumns": [
    12
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "I Click on Logout Button",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.write("Finished Scenario");
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 413611925,
  "status": "passed"
});
});