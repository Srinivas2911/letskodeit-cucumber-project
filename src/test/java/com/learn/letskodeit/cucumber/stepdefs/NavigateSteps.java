package com.learn.letskodeit.cucumber.stepdefs;

/*
Created by SP
*/

import com.learn.letskodeit.pages.HomePage;
import com.learn.letskodeit.pages.LoginPage;
import com.learn.letskodeit.pages.PracticePage;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class NavigateSteps {
    @When("^I click on the Login Link$")
    public void iClickOnTheLoginLink() {
        new HomePage().clickOnLoginLink();
    }

    @Then("^I should be see the Login to Lets Kode It$")
    public void iShouldBeSeeTheLoginToLetsKodeIt() {
        Assert.assertEquals(new LoginPage().getLoginPageText(), "Log In to Let's Kode It");
    }

    @When("^I click on Practice Link$")
    public void iClickOnPracticeLink() {
        new HomePage().clickOnPracticeLink();

    }

    @Then("^I should be on the Practice Page$")
    public void iShouldBeOnThePracticePage() {
        Assert.assertEquals(new PracticePage().getPracticePageText(), "Practice Page");

    }
}
