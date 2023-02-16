package gov.uk.check.visa.steps;

import com.sun.org.apache.bcel.internal.generic.NEW;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import gov.uk.check.visa.pages.DurationOfStayPage;
import gov.uk.check.visa.pages.StartPage;
import gov.uk.check.visa.pages.WorkTypePage;
import org.testng.Assert;

public class VisaConfoSteps {
    @Given("^User is on HomePage$")
    public void userIsOnHomePage() {

    }

    @When("^User to click on AcceptCookies$")
    public void userToClickOnAcceptCookies() {
        new StartPage().clickonAcceptCookiesButton();
    }


    @And("^User click on Start Button$")
    public void userClickOnStartButton() {
        new StartPage().clickonStartButton();
    }
    @And("^User select nationality Australia$")
    public void userSelectNationalityAustralia() {
        new StartPage().clickonnationalityAus();
    }
    @And("^User click on Continue Button$")
    public void userClickOnContinueButton() {
        new StartPage().clickonCountinueButton();
    }
    @And("^User Select reason Tourism$")
    public void userSelectReasonTourism() {
        new StartPage().clickonTourism();
    }

    @Then("^User should verify message\"([^\"]*)\"$")
    public void userShouldVerifyMessage(String mess)  {
        new StartPage().verifyNoneedForVisa(mess);
    }

    @And("^User select Nationality Chile$")
    public void userSelectNationalityChile() {
        new WorkTypePage().clickonnationalityChile();
    }

    @And("^User click on Work,Academic visit or Business$")
    public void userClickOnWorkAcademicVisitOrBusiness() {
        new WorkTypePage().clickonworkAcademicVisit();
    }

    @And("^User Select intendent to stay for longer then (\\d+) month$")
    public void userSelectIntendentToStayForLongerThenMonth(int arg0) {
        new WorkTypePage().clickonlongerThen6Month();
    }

    @And("^User Select having plan to work for Health and Care Professional$")
    public void userSelectHavingPlanToWorkForHealthAndCareProfessional() {
        new WorkTypePage().clickonhealthAndCare();
    }

    @Then("^User should be able to verify message\"([^\"]*)\"$")
    public void userShouldBeAbleToVerifyMessage(String VisaCH)  {
        new WorkTypePage().verifyNeedVisatext(VisaCH);


    }

    @And("^User select Nationality Colombian$")
    public void userSelectNationalityColombian() {
        new DurationOfStayPage().clickonNtionalityColombia();
    }
    @And("^user select join partner or family for long stay$")
    public void user_select_join_partner_or_family_for_long_stay()  {
        new DurationOfStayPage().ClickonjoinpartnerorFamily();
    }

    @Then("^User should should be able to verify message \"([^\"]*)\"$")
    public void userShouldShouldBeAbleToVerifyMessage(String need)  {
        new DurationOfStayPage().verifyneedvisaText(need);

    }


}
