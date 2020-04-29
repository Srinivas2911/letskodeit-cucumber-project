Feature: Navigation Functionality

  As a User i am able to navigate to Lets Kode it web pages

  Scenario: User Should Navigate to Login Page
    Given I am on the Home Page
    When I click on the Login Link
    Then I should be see the Login to Lets Kode It

    Scenario: User Should Navigate to Practice Page
      Given I am on the Home Page
      When I click on Practice Link
      Then I should be on the Practice Page
