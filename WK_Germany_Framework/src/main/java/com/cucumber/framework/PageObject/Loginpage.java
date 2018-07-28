package com.cucumber.framework.PageObject;

import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import com.cucumber.framework.configreader.ObjectRepo;
import com.cucumber.framework.helper.Logger.LoggerHelper;
import com.cucumber.framework.helper.Wait.WaitHelper;
import com.cucumber.framework.helper.genericHelper.GenericHelper;

public class Loginpage {

	WebDriver driver;
	private final Logger log = LoggerHelper.getLogger(Loginpage.class);
	WaitHelper waitHelper;

	@FindBy(xpath = "//input[@id='username']")
	WebElement username;

	@FindBy(xpath = "//input[@id='password']")
	WebElement password;

	@FindBy(xpath = "//button[@id='btn-login']")
	WebElement login_button;
	
	@FindBy(xpath="//div[@class='userAccountBox']")
	WebElement UserAccount;
	
	@FindBy(xpath="/html/body/div[1]/header/div/div[3]/div/div[2]/a")
	WebElement LogoutButton;
	
	
	

	public Loginpage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
		// WaitHelper waithelper = new WaitHelper(driver);
		// waithelper.waitForElement(driver, username,
		// ObjectRepo.reader.getExplicitWait());

	}

	public void enterusername(String username) {
		log.info("Entering username");
		this.username.sendKeys(username);
	}

	public void enterpassword(String password) {
		log.info("Entering password");
		this.password.sendKeys(password);
	}

	public void clickloginbutton() {
		log.info("Clicking login button");
		this.login_button.click();

	}
	
	public void logout()
	{
		log.info("Logging Out from the system");
		this.UserAccount.click();
		this.LogoutButton.click();
	}
	
	
	
}
