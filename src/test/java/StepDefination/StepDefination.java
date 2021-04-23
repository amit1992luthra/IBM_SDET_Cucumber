package StepDefination;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefination {
	

@Given("^User should be navigated to the Google Search page$")
public void user_should_be_navigated_to_the_Google_Search_page()  {
	/*System.setProperty("webdriver.chrome.driver","D://chromedriver_win32//chromedriver.exe");
	
	WebDriver driver = new ChromeDriver();
	
	//Webdriver Commands
	driver.get("https://www.google.com/");*/
	System.out.println("In Step 1 ");
    
}

@When("^He enter any value in the Search Box$")
public void he_enter_any_value_in_the_Search_Box()  {
	System.out.println("In Step 2 ");
    
}

@When("^Click on Search Button$")
public void click_on_Search_Button()  {
	System.out.println("In Step 3 ");
    
}

@Then("^Related Results will be displayed$")
public void related_Results_will_be_displayed() {
	System.out.println("In Step 4 ");
    
}


@When("^He enter any value \"([^\"]*)\" in the Search Box$")
public void he_enter_any_value_in_the_Search_Box(String testdata1)  {
   System.out.println(testdata1);
    
}



@Then("^Related Results like \"([^\"]*)\" and \"([^\"]*)\" will be displayed$")
public void related_Results_like_and_will_be_displayed(String testdata2, String testdata3)  {
	System.out.println(testdata2);
	System.out.println(testdata3);
    
}


}
