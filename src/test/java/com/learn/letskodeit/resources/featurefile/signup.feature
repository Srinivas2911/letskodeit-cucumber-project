Feature: Sign Up functionality

  As a new User I should be able to sign up successfully

  Scenario: User Should Sign up Successfully
    Given I am on the Home Page
    When I click on Sign Up Link
    And I enter full name "Roger Moore"
    And I enter Email "<email>"
    And I enter password "Roger123"
    And I confirm password "Roger123"
    And I click the Agree Terms Check Box
    And I click the Sign Up Button
    Then I should sign up successfully

  Scenario Outline: User Should Not Sign up with Invalid Passwords
    Given I am on the Home Page
    When I click on Sign Up Link
    And I enter full name "Roger Moore"
    And I enter Email "<email>"
    And I enter password "<password>"
    And I confirm password "<confirmPassword>"
    And I click the Agree Terms Check Box
    And I click the Sign Up Button
    Then I should Not sign up successfully
    Examples:
      | password | confirmPassword |
      | Roger123 | Roger123456     |
      | Roger456 | Roger123786     |