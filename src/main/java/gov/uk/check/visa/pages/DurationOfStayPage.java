package gov.uk.check.visa.pages;

import gov.uk.check.visa.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class DurationOfStayPage extends Utility {
    private static final Logger log = LogManager.getLogger(gov.uk.check.visa.pages.DurationOfStayPage.class.getName());

    public DurationOfStayPage() {
        PageFactory.initElements(driver, this);
    }
    @CacheLookup
    @FindBy(xpath = "//select[@id='response']/option[47]")
    WebElement nationalitycolombia;

    @CacheLookup
    @FindBy(xpath = "//div[@class='govuk-radios']/div[5]//input[@id='response-4']" )
    WebElement joinPartnerOrFamily;

    @CacheLookup
    @FindBy(xpath = "")
    WebElement ukImmigrationStatus;

    @CacheLookup
    @FindBy(xpath="//div[@class='govuk-!-margin-bottom-6']/h2")
    WebElement verifyneedVisaColombia;

    public void clickonNtionalityColombia(){
        clickOnElement(nationalitycolombia);
    }
    public void ClickonjoinpartnerorFamily(){
        clickOnElement(joinPartnerOrFamily);
    }
    public void clickonukImmigrationStatus() {
        clickOnElement(ukImmigrationStatus);
    }
    public String verifyneedvisaText(String visa){
        return getTextFromElement(verifyneedVisaColombia);
    }
}

