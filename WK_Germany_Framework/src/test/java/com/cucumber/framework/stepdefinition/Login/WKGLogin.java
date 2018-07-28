package com.cucumber.framework.stepdefinition.Login;

import com.cucumber.framework.PageObject.Loginpage;
import com.cucumber.framework.configreader.ObjectRepo;
import com.cucumber.framework.helper.TestBase.TestBase;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class WKGLogin {
	Loginpage loginpage = new Loginpage(TestBase.driver);
	

	@Given("^I navigate to the application$")
	public void i_navigate_to_the_application() throws Throwable {
		 TestBase.driver.get(ObjectRepo.reader.getWebsite());
	   
	    
	}

	@When("^I enter \"([^\"]*)\" to username textbox$")
	public void i_enter_to_username_textbox(String Username) throws Throwable {
		loginpage.enterusername(Username);
	  
	}

	@When("^I enter \"([^\"]*)\" to password textbox$")
	public void i_enter_to_password_textbox(String Password) throws Throwable {
		loginpage.enterpassword(Password);
	
	}

	@When("^I click the login button$")
	public void i_click_the_login_button() throws Throwable {
		loginpage.clickloginbutton();
	
	}

	@Then("^I verify login success$")
	public void i_verify_login_success() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions

	}

	@Then("^I click on logout button$")
	public void i_click_on_logout_button() throws Throwable {
		Thread.sleep(7000);
		 loginpage.logout();
	    throw new PendingException();
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

}
