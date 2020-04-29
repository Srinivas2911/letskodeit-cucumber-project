package com.learn.letskodeit.pages;

/*
Created by SP
*/

import com.cucumber.listener.Reporter;
import com.learn.letskodeit.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class LoginPage extends Utility {

    //Log the webelements and methods into Log4j reports
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

//Using selenium @Findby and initElement methods
// using _ help separate from variable

    @FindBy(xpath ="//h1[@class='text-center']")
    WebElement _loginPageText;

    public String getLoginPageText(){
        Reporter.addStepLog(" Login Page Text is displayed  : " + _loginPageText.toString() + "<br>");
        log.info("Login Page Text is displayed : " + _loginPageText.toString());
        return getTextFromElement(_loginPageText);
    }

}
