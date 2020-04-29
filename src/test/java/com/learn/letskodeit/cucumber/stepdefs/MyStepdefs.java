package com.learn.letskodeit.cucumber.stepdefs;/*
Created by SP
*/

import com.learn.letskodeit.pages.HomePage;
import com.learn.letskodeit.pages.MyCoursesPage;
import com.learn.letskodeit.pages.SignUpPage;
import com.learn.letskodeit.utility.Utility;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

import static com.learn.letskodeit.utility.Utility.getRandomString;

public class MyStepdefs {

    @Given("^I am on the Home Page$")
    public void iAmOnTheHomePage() {
    }

    @When("^I click on Sign Up Link$")
    public void iClickOnSignUpLink() {
        new HomePage().clickOnSignUplink();
    }

    @And("^I enter full name \"([^\"]*)\"$")
    public void iEnterFullName(String fullName) {
        new SignUpPage().enterFullName(fullName);
    }

    @And("^I enter Email \"([^\"]*)\"$")
    public void iEnterEmail(String email) {
        new SignUpPage().enterEmail(email = "Roger"+getRandomString(4)+"@gmail.com");
    }

    @And("^I enter password \"([^\"]*)\"$")
    public void iEnterPassword(String password) {
        new SignUpPage().enterPassword(password);
    }

    @And("^I confirm password \"([^\"]*)\"$")
    public void iConfirmPassword(String confirmPassword) {
        new SignUpPage().enterConfirmPassword(confirmPassword);
    }

    @And("^I click the Agree Terms Check Box$")
    public void iClickTheAgreeTermsCheckBox() {
        new SignUpPage().clickOnAgreeToTermsCheckBox();
    }

    @And("^I click the Sign Up Button$")
    public void iClickTheSignUpButton() {
        new SignUpPage().clickOnSignUpButton();
    }

    @Then("^I should sign up successfully$")
    public void iShouldSignUpSuccessfully() {
        Assert.assertEquals(new MyCoursesPage().getMyCourseText(), "My Courses" );

    }

    @Then("^I should Not sign up successfully$")
    public void iShouldNotSignUpSuccessfully() {
        Assert.assertEquals(new SignUpPage().getErrorMessageText(), "Password confirmation doesn't match Password");
    }
}
