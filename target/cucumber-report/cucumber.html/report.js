$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("VisaConfirmationTest.feature");
formatter.feature({
  "line": 1,
  "name": "Visa Confirmation",
  "description": "",
  "id": "visa-confirmation",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3092902500,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Australian need visa",
  "description": "",
  "id": "visa-confirmation;australian-need-visa",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User to click on AcceptCookies",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User click on Start Button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User select nationality Australia",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click on Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User Select reason Tourism",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User click on Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User should verify message\"You will not need visa to come to the UK\"",
  "keyword": "Then "
});
formatter.match({
  "location": "VisaConfoSteps.userIsOnHomePage()"
});
formatter.result({
  "duration": 92918199,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfoSteps.userToClickOnAcceptCookies()"
});
formatter.result({
  "duration": 71691200,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfoSteps.userClickOnStartButton()"
});
formatter.result({
  "duration": 220835000,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfoSteps.userSelectNationalityAustralia()"
});
formatter.result({
  "duration": 30906600,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfoSteps.userClickOnContinueButton()"
});
formatter.result({
  "duration": 269457200,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfoSteps.userSelectReasonTourism()"
});
formatter.result({
  "duration": 45663899,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfoSteps.userClickOnContinueButton()"
});
formatter.result({
  "duration": 292108600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You will not need visa to come to the UK",
      "offset": 27
    }
  ],
  "location": "VisaConfoSteps.userShouldVerifyMessage(String)"
});
formatter.result({
  "duration": 29870300,
  "status": "passed"
});
formatter.after({
  "duration": 618961101,
  "status": "passed"
});
formatter.before({
  "duration": 1580992799,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "A Chilean coming to UK for Work and Plans On Staying for Longer then Six Month",
  "description": "",
  "id": "visa-confirmation;a-chilean-coming-to-uk-for-work-and-plans-on-staying-for-longer-then-six-month",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "User is on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "User to click on AcceptCookies",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User click on Start Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User select Nationality Chile",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User click on Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User click on Work,Academic visit or Business",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User click on Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User Select intendent to stay for longer then 6 month",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User click on Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User Select having plan to work for Health and Care Professional",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User click on Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User should be able to verify message\"You need visa to work in health care\"",
  "keyword": "Then "
});
formatter.match({
  "location": "VisaConfoSteps.userIsOnHomePage()"
});
formatter.result({
  "duration": 23900,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfoSteps.userToClickOnAcceptCookies()"
});
formatter.result({
  "duration": 61563100,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfoSteps.userClickOnStartButton()"
});
formatter.result({
  "duration": 227347499,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfoSteps.userSelectNationalityChile()"
});
formatter.result({
  "duration": 32236600,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfoSteps.userClickOnContinueButton()"
});
formatter.result({
  "duration": 342241500,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfoSteps.userClickOnWorkAcademicVisitOrBusiness()"
});
formatter.result({
  "duration": 47157500,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfoSteps.userClickOnContinueButton()"
});
formatter.result({
  "duration": 238921599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 46
    }
  ],
  "location": "VisaConfoSteps.userSelectIntendentToStayForLongerThenMonth(int)"
});
formatter.result({
  "duration": 46136600,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfoSteps.userClickOnContinueButton()"
});
formatter.result({
  "duration": 307071901,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfoSteps.userSelectHavingPlanToWorkForHealthAndCareProfessional()"
});
formatter.result({
  "duration": 46060500,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfoSteps.userClickOnContinueButton()"
});
formatter.result({
  "duration": 338745401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You need visa to work in health care",
      "offset": 38
    }
  ],
  "location": "VisaConfoSteps.userShouldBeAbleToVerifyMessage(String)"
});
formatter.result({
  "duration": 26958000,
  "status": "passed"
});
formatter.after({
  "duration": 612343601,
  "status": "passed"
});
formatter.before({
  "duration": 1667391900,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "A Colombian coming to UK for Joining a Partner for a long Stay",
  "description": "",
  "id": "visa-confirmation;a-colombian-coming-to-uk-for-joining-a-partner-for-a-long-stay",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 27,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "User is on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "User to click on AcceptCookies",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "User click on Start Button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User select Nationality Colombian",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User click on Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "user select join partner or family for long stay",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User click on Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User should should be able to verify message \" you will need visa to join your family or partner in the uk\"",
  "keyword": "Then "
});
formatter.match({
  "location": "VisaConfoSteps.userIsOnHomePage()"
});
formatter.result({
  "duration": 23600,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfoSteps.userToClickOnAcceptCookies()"
});
formatter.result({
  "duration": 58967701,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfoSteps.userClickOnStartButton()"
});
formatter.result({
  "duration": 256790100,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfoSteps.userSelectNationalityColombian()"
});
formatter.result({
  "duration": 32530599,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfoSteps.userClickOnContinueButton()"
});
formatter.result({
  "duration": 330120999,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfoSteps.user_select_join_partner_or_family_for_long_stay()"
});
formatter.result({
  "duration": 44069900,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfoSteps.userClickOnContinueButton()"
});
formatter.result({
  "duration": 273679601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " you will need visa to join your family or partner in the uk",
      "offset": 46
    }
  ],
  "location": "VisaConfoSteps.userShouldShouldBeAbleToVerifyMessage(String)"
});
formatter.result({
  "duration": 24886599,
  "status": "passed"
});
formatter.after({
  "duration": 613585299,
  "status": "passed"
});
});