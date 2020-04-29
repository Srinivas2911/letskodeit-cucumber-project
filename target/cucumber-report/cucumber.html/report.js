$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/learn/letskodeit/resources/featurefile/navigate.feature");
formatter.feature({
  "line": 1,
  "name": "Navigation Functionality",
  "description": "\r\nAs a User i am able to navigate to Lets Kode it web pages",
  "id": "navigation-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 19327116100,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User Should Navigate to Login Page",
  "description": "",
  "id": "navigation-functionality;user-should-navigate-to-login-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on the Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on the Login Link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should be see the Login to Lets Kode It",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnTheHomePage()"
});
formatter.result({
  "duration": 297412200,
  "status": "passed"
});
formatter.match({
  "location": "NavigateSteps.iClickOnTheLoginLink()"
});
formatter.result({
  "duration": 707262400,
  "status": "passed"
});
formatter.match({
  "location": "NavigateSteps.iShouldBeSeeTheLoginToLetsKodeIt()"
});
formatter.result({
  "duration": 5096836300,
  "status": "passed"
});
formatter.after({
  "duration": 1242540400,
  "status": "passed"
});
formatter.before({
  "duration": 13639233000,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "User Should Navigate to Practice Page",
  "description": "",
  "id": "navigation-functionality;user-should-navigate-to-practice-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I am on the Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on Practice Link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I should be on the Practice Page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnTheHomePage()"
});
formatter.result({
  "duration": 94800,
  "status": "passed"
});
formatter.match({
  "location": "NavigateSteps.iClickOnPracticeLink()"
});
formatter.result({
  "duration": 446049000,
  "status": "passed"
});
formatter.match({
  "location": "NavigateSteps.iShouldBeOnThePracticePage()"
});
formatter.result({
  "duration": 1211183100,
  "status": "passed"
});
formatter.after({
  "duration": 1807491400,
  "status": "passed"
});
formatter.uri("src/test/java/com/learn/letskodeit/resources/featurefile/signup.feature");
formatter.feature({
  "line": 1,
  "name": "Sign Up functionality",
  "description": "\r\nAs a new User I should be able to sign up successfully",
  "id": "sign-up-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 20424445300,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User Should Sign up Successfully",
  "description": "",
  "id": "sign-up-functionality;user-should-sign-up-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on the Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on Sign Up Link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter full name \"Roger Moore\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter Email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter password \"Roger123\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I confirm password \"Roger123\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click the Agree Terms Check Box",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click the Sign Up Button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should sign up successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnTheHomePage()"
});
formatter.result({
  "duration": 59600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnSignUpLink()"
});
formatter.result({
  "duration": 309825700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Roger Moore",
      "offset": 19
    }
  ],
  "location": "MyStepdefs.iEnterFullName(String)"
});
formatter.result({
  "duration": 5840370900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cemail\u003e",
      "offset": 15
    }
  ],
  "location": "MyStepdefs.iEnterEmail(String)"
});
formatter.result({
  "duration": 827222300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Roger123",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 418272300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Roger123",
      "offset": 20
    }
  ],
  "location": "MyStepdefs.iConfirmPassword(String)"
});
formatter.result({
  "duration": 350813800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickTheAgreeTermsCheckBox()"
});
formatter.result({
  "duration": 371429100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickTheSignUpButton()"
});
formatter.result({
  "duration": 16121321900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldSignUpSuccessfully()"
});
formatter.result({
  "duration": 160685100,
  "status": "passed"
});
formatter.after({
  "duration": 1868059000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "User Should Not Sign up with Invalid Passwords",
  "description": "",
  "id": "sign-up-functionality;user-should-not-sign-up-with-invalid-passwords",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "I am on the Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I click on Sign Up Link",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I enter full name \"Roger Moore\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter Email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I confirm password \"\u003cconfirmPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click the Agree Terms Check Box",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click the Sign Up Button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I should Not sign up successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "sign-up-functionality;user-should-not-sign-up-with-invalid-passwords;",
  "rows": [
    {
      "cells": [
        "password",
        "confirmPassword"
      ],
      "line": 27,
      "id": "sign-up-functionality;user-should-not-sign-up-with-invalid-passwords;;1"
    },
    {
      "cells": [
        "Roger123",
        "Roger123456"
      ],
      "line": 28,
      "id": "sign-up-functionality;user-should-not-sign-up-with-invalid-passwords;;2"
    },
    {
      "cells": [
        "Roger456",
        "Roger123786"
      ],
      "line": 29,
      "id": "sign-up-functionality;user-should-not-sign-up-with-invalid-passwords;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 15027465100,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "User Should Not Sign up with Invalid Passwords",
  "description": "",
  "id": "sign-up-functionality;user-should-not-sign-up-with-invalid-passwords;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "I am on the Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I click on Sign Up Link",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I enter full name \"Roger Moore\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter Email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter password \"Roger123\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I confirm password \"Roger123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click the Agree Terms Check Box",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click the Sign Up Button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I should Not sign up successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnTheHomePage()"
});
formatter.result({
  "duration": 46000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnSignUpLink()"
});
formatter.result({
  "duration": 297240600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Roger Moore",
      "offset": 19
    }
  ],
  "location": "MyStepdefs.iEnterFullName(String)"
});
formatter.result({
  "duration": 7045770800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cemail\u003e",
      "offset": 15
    }
  ],
  "location": "MyStepdefs.iEnterEmail(String)"
});
formatter.result({
  "duration": 638522200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Roger123",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 279984200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Roger123456",
      "offset": 20
    }
  ],
  "location": "MyStepdefs.iConfirmPassword(String)"
});
formatter.result({
  "duration": 429771000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickTheAgreeTermsCheckBox()"
});
formatter.result({
  "duration": 281134100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickTheSignUpButton()"
});
formatter.result({
  "duration": 3233439300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldNotSignUpSuccessfully()"
});
formatter.result({
  "duration": 475010800,
  "status": "passed"
});
formatter.after({
  "duration": 1447518700,
  "status": "passed"
});
formatter.before({
  "duration": 13511401200,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "User Should Not Sign up with Invalid Passwords",
  "description": "",
  "id": "sign-up-functionality;user-should-not-sign-up-with-invalid-passwords;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "I am on the Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I click on Sign Up Link",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I enter full name \"Roger Moore\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter Email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter password \"Roger456\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I confirm password \"Roger123786\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click the Agree Terms Check Box",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click the Sign Up Button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I should Not sign up successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnTheHomePage()"
});
formatter.result({
  "duration": 61100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnSignUpLink()"
});
formatter.result({
  "duration": 246562100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Roger Moore",
      "offset": 19
    }
  ],
  "location": "MyStepdefs.iEnterFullName(String)"
});
formatter.result({
  "duration": 5583768700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cemail\u003e",
      "offset": 15
    }
  ],
  "location": "MyStepdefs.iEnterEmail(String)"
});
formatter.result({
  "duration": 412036200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Roger456",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 372356200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Roger123786",
      "offset": 20
    }
  ],
  "location": "MyStepdefs.iConfirmPassword(String)"
});
formatter.result({
  "duration": 412505600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickTheAgreeTermsCheckBox()"
});
formatter.result({
  "duration": 240719100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickTheSignUpButton()"
});
formatter.result({
  "duration": 3207144500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldNotSignUpSuccessfully()"
});
formatter.result({
  "duration": 557681300,
  "status": "passed"
});
formatter.after({
  "duration": 1587638000,
  "status": "passed"
});
});