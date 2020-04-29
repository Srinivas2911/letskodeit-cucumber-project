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

public class PracticePage extends Utility {

    //Log the webelements and methods into Log4j reports
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

//Using selenium @Findby and initElement methods
// using _ help separate from variable

    @FindBy(xpath ="//h1[contains(text(),'Practice Page')]")
    WebElement _practicePageText;

    public String getPracticePageText(){
        Reporter.addStepLog("Practice Text is displayed  : " + _practicePageText.toString() + "<br>");
        log.info("Practice Page Text is displayed : " + _practicePageText.toString());
        return getTextFromElement(_practicePageText);
    }


}
