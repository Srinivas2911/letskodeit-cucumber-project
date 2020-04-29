package com.learn.letskodeit.pages;

/*
Created by SP
*/

import com.cucumber.listener.Reporter;
import com.learn.letskodeit.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class SignUpPage extends Utility {


    //Log the webelements and methods into Log4j reports
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

//Using selenium @Findby and initElement methods
// using _ help separate from variable

    @FindBy(id ="user_name")
    WebElement _fullName;

    public void enterFullName(String fullName){
    Reporter.addStepLog("Entering Full Name : " + fullName+ " On Full Name Field "+ _fullName.toString());
    sendTextToElement(_fullName, fullName);
        log.info("Entering Full Name : " + fullName+ " On Full Name Field "+ _fullName.toString());
}

    @FindBy(id ="user_email")
    WebElement _email;

    public void enterEmail(String email){
        Reporter.addStepLog("Entering Email : " + email+ " On Email Field "+ _email.toString());
        sendTextToElement(_email,email);
        log.info("Entering Email : " + email+ " On Email Field "+ _email.toString());
}

    @FindBy(id ="user_password")
    WebElement _password;

    public void enterPassword(String password){
        Reporter.addStepLog("Entering Password : " + password+ " On Password Field "+ _password.toString());
        sendTextToElement(_password,password);
        log.info("Entering Password : " + password+ " On Password Field "+ _password.toString());
    }

    @FindBy(id ="user_password_confirmation")
    WebElement _confirmPassword;

    public void enterConfirmPassword(String password) {
        Reporter.addStepLog("Entering Confirm Password : " + password + " On Confirm Password Field " + _confirmPassword.toString());
        sendTextToElement(_confirmPassword, password);
        log.info("Entering Confirm Password : " + password + " On Confirm Password Field " + _confirmPassword.toString());
    }

    @FindBy(id="user_agreed_to_terms")
    WebElement _userAgreeTerms;

    public void clickOnAgreeToTermsCheckBox() {
        Reporter.addStepLog("Clicking on Agree to Terms : " + _userAgreeTerms.toString() + "<br>");
        clickOnElement(_userAgreeTerms);
        log.info("Clicking on Agree To Terms : " + _userAgreeTerms.toString());
    }

    @FindBy(xpath="//input[@name='commit']")
    WebElement _signUpBtn;

    public void clickOnSignUpButton() {
        Reporter.addStepLog("Clicking on Sign Up Button : " + _signUpBtn.toString() + "<br>");
        clickOnElement(_signUpBtn);
        log.info("Clicking on Agree To Terms : " + _signUpBtn.toString());
    }


@FindBy(xpath="//li[contains(text(),\"Password confirmation doesn't match Password\")]")
    WebElement _errorMessage;

    public void errorMessageTextIsDisplayed (){
        Reporter.addStepLog("Error Message Text is displayed  : " + _errorMessage.toString() + "<br>");
        verifyThatTextIsDisplayed((By)_errorMessage, "Password confirmation doesn't match Password");
        log.info("Error Message Text is displayed : " + _errorMessage.toString());

    }

    public String getErrorMessageText(){
        Reporter.addStepLog("My Course Text is displayed  : " + _errorMessage.toString() + "<br>");
        log.info("My Course Text is displayed : " + _errorMessage.toString());
        return getTextFromElement(_errorMessage);
    }
}
