Feature: As a jootza customer, I want to be able to navigate to landing poage so that I can view product information

  @jootza @jootzaLanding
  Scenario: Customer is displayed with jootza.com landing page
    Given I am on the Jootza portal
    When I click on "Login"
    Then I should see "LoginHeader"

  @jootza @jootzaLogin
  Scenario: Customer is displayed with jootza.com landing page and tries to login into the portal
    Given I am on the Jootza portal
    And I enter the inputs for login
      | InputName | InputValue  |
      | username  | johndoe     |
      | password  | password123 |
    And I click on "LoginBtn"
    Then I should see "errorMessage"

  @jootza @checkApprover
  Scenario Outline: Customer is logging into the jootza website to verify the approver name
    Given I am logged on to the Jootza portal as "<Jootza Customer>"
    Then I should see the approver name as "<approverName>"
    And I click on "Submit Button"
    Examples:
      | Jootza Customer | approverName |
      | kavithas        | ADMIN, CLT   |
      | Shanuser12      | Adams, Jimmy |

  @jootza @recordTime
  Scenario Outline: Customer is logging into the jootza website to record time
    Given I am on logged on to the Jootza portal as "<Jootza Customer>"
    And I enter notes field for days
      | FieldName      | FieldValue                      |
      | MondayNotes    | Worked on User story CLT-B3-009 |
      | TuesdayNotes   | Worked on User story CLT-B3-009 |
      | WednesdayNotes | Worked on User story CLT-B3-009 |
      | ThursdayNotes  | Worked on User story CLT-B3-009 |
      | FridayNotes    | Worked on User story CLT-B3-009 |
    And I click on  "Submit"
#Then I should see "Timesheet Created"  Message