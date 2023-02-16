package gov.uk.check.visa.pages;

import gov.uk.check.visa.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class StartPage extends Utility {
    private static final Logger log = LogManager.getLogger(StartPage.class.getName());

    public StartPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//div[@class='govuk-button-group']//button[contains(text(),'Accept additional cookies')]")
    //div[@class='govuk-cookie-banner js-banner-wrapper']/div/div[2]/button[1]
    WebElement AcceptCookies;

    @CacheLookup
    @FindBy(xpath = "//a[@class='gem-c-button govuk-button govuk-button--start']")
    WebElement startNowButton;

    @CacheLookup
    @FindBy(xpath = "//select[@id='response']/option[11]")
    WebElement nationalityAustralia;

    @CacheLookup
    @FindBy(xpath = "//button[@class='gem-c-button govuk-button gem-c-button--bottom-margin']")
    WebElement countinueButton;

    @CacheLookup
    @FindBy(xpath = "//div[@class='govuk-grid-column-two-thirds']/form/div/div/fieldset/div/div[1]/input")
    WebElement TourismorvisitingFamily;

    @CacheLookup
    @FindBy(xpath = "//div[@class='govuk-!-margin-bottom-6']/h2[contains(text(),'You will not need a visa to come to the UK')]")
    WebElement verifynoNeedforVisa;

    public void clickonAcceptCookiesButton() {
        clickOnElement(AcceptCookies);
    }

    public void clickonnationalityAus() {
        clickOnElement(nationalityAustralia);
    }

    public void clickonCountinueButton() {
        clickOnElement(countinueButton);
    }

    public void clickonTourism() {
        clickOnElement(TourismorvisitingFamily);
    }
    public String verifyNoneedForVisa(String message){
        return getTextFromElement(verifynoNeedforVisa);
    }
    public void clickonStartButton(){
        clickOnElement(startNowButton);
    }
}

