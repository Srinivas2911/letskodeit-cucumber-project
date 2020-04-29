package com.learn.letskodeit.pages;

import com.cucumber.listener.Reporter;
import com.learn.letskodeit.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;


public class HomePage extends Utility {

    //Log the webelements and methods into Log4j reports
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

//Using selenium @Findby and initElement methods
// using _ help separate from variable

    @FindBy(className = "headline")
    WebElement _welcomeText;

    @FindBy(partialLinkText = "Practi")
    WebElement _practiceLink;

    @FindBy(partialLinkText = "Login")
    WebElement _loginLink;

    @FindBy(xpath = "//a[@id='header-sign-up-btn']")
    WebElement _signUpLink;

    public void clickOnPracticeLink() {
        Reporter.addStepLog("Clicking on Practice Link : " + _practiceLink.toString());
        clickOnElement(_practiceLink);
        log.info("Clicking on Practice Link : " + _practiceLink.toString());
    }

    public void clickOnLoginLink() {
        Reporter.addStepLog(" Clicking on Login Link : " + _loginLink.toString() + "<br>");
        clickOnElement(_loginLink);
        log.info("Clicking on Login Link : " + _loginLink.toString());
    }

    public void clickOnSignUplink() {
        Reporter.addStepLog("Clicking on Sign Up link : " + _signUpLink.toString() + "<br>");
        clickOnElement(_signUpLink);
        log.info("Clicking on Sign Up link : " + _signUpLink.toString());
    }

}
