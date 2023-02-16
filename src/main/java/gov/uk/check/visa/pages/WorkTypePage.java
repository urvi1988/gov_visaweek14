package gov.uk.check.visa.pages;

import gov.uk.check.visa.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class WorkTypePage extends Utility {
    private static final Logger log = LogManager.getLogger(gov.uk.check.visa.pages.WorkTypePage.class.getName());

    public WorkTypePage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//select[@id='response']/option[45]")
    WebElement nationalityChile;

    @CacheLookup
    @FindBy(xpath ="//input[@id='response-1']")
    WebElement workAcademicVist;

    @CacheLookup
    @FindBy(xpath = "//input[@id='response-1']")
    WebElement longerThen6Month;
    @CacheLookup
    @FindBy(xpath = "//input[@id='response-0']")
    WebElement healthAndCare;

    @CacheLookup
    @FindBy(xpath = "//h2[@class='gem-c-heading gem-c-heading--font-size-27 govuk-!-margin-bottom-6']")
    WebElement verifyNeedVisaChile;

    public void clickonnationalityChile(){
        clickOnElement(nationalityChile);
    }
    public void clickonworkAcademicVisit(){
        clickOnElement(workAcademicVist);
    }
    public void clickonlongerThen6Month(){
        clickOnElement(longerThen6Month);
    }
    public void clickonhealthAndCare(){
        clickOnElement(healthAndCare);
    }
    public String verifyNeedVisatext(String visaC ){
        return getTextFromElement(verifyNeedVisaChile);
    }

}




