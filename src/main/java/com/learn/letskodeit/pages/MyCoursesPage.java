package com.learn.letskodeit.pages;

import com.cucumber.listener.Reporter;
import com.learn.letskodeit.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class MyCoursesPage extends Utility {

    //Log the webelements and methods into Log4j reports
    private static final Logger log = LogManager.getLogger(MyCoursesPage.class.getName());

//Using selenium @Findby and initElement methods
// using _ help separate from variable

    @FindBy(xpath = "//a[contains(text(),'My Courses')]")
    WebElement _myCourseText;

    public void myCourseTextIsDisplayed (){
        Reporter.addStepLog("My Course Text is displayed  : " + _myCourseText.toString() + "<br>");
        verifyThatTextIsDisplayed((By)_myCourseText, "      My Courses");
        log.info("My Course Text is displayed : " + _myCourseText.toString());

    }

    public String getMyCourseText(){
        Reporter.addStepLog("My Course Text is displayed  : " + _myCourseText.toString() + "<br>");
        log.info("My Course Text is displayed : " + _myCourseText.toString());
        return getTextFromElement(_myCourseText);
    }
}
