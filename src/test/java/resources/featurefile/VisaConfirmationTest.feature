Feature:Visa Confirmation

  Scenario: Australian need visa
    Given  User is on HomePage
    When User to click on AcceptCookies
    And User click on Start Button
    And User select nationality Australia
    And User click on Continue Button
    And User Select reason Tourism
    And User click on Continue Button
    Then User should verify message"You will not need visa to come to the UK"

    Scenario: A Chilean coming to UK for Work and Plans On Staying for Longer then Six Month
      Given User is on HomePage
     When User to click on AcceptCookies
      And User click on Start Button
      And User select Nationality Chile
      And User click on Continue Button
      And User click on Work,Academic visit or Business
     And User click on Continue Button
     And User Select intendent to stay for longer then 6 month
      And User click on Continue Button
      And User Select having plan to work for Health and Care Professional
      And User click on Continue Button
      Then User should be able to verify message"You need visa to work in health care"

      @smoke
      Scenario: A Colombian coming to UK for Joining a Partner for a long Stay
        Given User is on HomePage
        When User to click on AcceptCookies
        And User click on Start Button
        And User select Nationality Colombian
        And User click on Continue Button
        And user select join partner or family for long stay
        And User click on Continue Button
       Then User should should be able to verify message " you will need visa to join your family or partner in the uk"
