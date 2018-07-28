package com.cucumber.framework.PageObject;

import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.cucumber.framework.helper.Logger.LoggerHelper;
import com.cucumber.framework.helper.Wait.WaitHelper;

public class NGC {
	
	WebDriver driver;
	private final Logger log = LoggerHelper.getLogger(NGC.class);
	WaitHelper waitHelper;
	
	
	@FindBy(xpath = "//a[@id='link-ngc']")
	WebElement NGC_Link;

	@FindBy(xpath = "//a[contains(text(),'Create Record ')]")
	WebElement CreateRecord_NGC;

	@FindBy(xpath = "//a[@href='/NGC/forms/create/BEGR']")
	WebElement CreateReacord_NGCBEGR;

	@FindBy(xpath = "//input[@id='circularLetterDate']")
	WebElement Circularissuedate;

	@FindBy(xpath = "//i[@id='createFileName']")
	WebElement createfilenametooltip;

	@FindBy(xpath = "//button[@data-content-id='submitMainForm']")
	WebElement submitmainform;
	
	@FindBy(xpath="//*[@id=\"submitMainForm\"]/div/div[2]/div")
	WebElement Submitalert;
	
	@FindBy(xpath="//a[@id='create-amendement']")
	WebElement NowBtn;
	
	
	@FindBy(xpath="//input[@name='updateDate']")
	WebElement Updatedate;
	
	@FindBy(xpath="//select[@name='taMode.ngcMasterDataId']")
	WebElement AmendmentType;
	
	@FindBy(xpath="//button[contains(text(),' Submit ')]")
	WebElement AmendmentSubmitbutton;
	
	
	
	
	public  NGC(WebDriver driver)
	{
	this.driver=driver;
	PageFactory.initElements(driver, this);
	}
	
	
	public void NGCnewrecordClick() throws InterruptedException
	{
		log.info("Clicking on NGC Link");
		this.NGC_Link.click();
		Thread.sleep(5000);
		this.CreateRecord_NGC.click();
	}
	
	public void NGCBegr()
	{
		log.info("Opening NGC BEGR Form");
		this.CreateReacord_NGCBEGR.click();
	}
	
	public void Entercircularletterdate(String circularletterdate)
	{
		log.info("Entering circularletterissuedate");
		this.Circularissuedate.sendKeys(circularletterdate);
	}
	
	
	public void FilenameGenerate()
	{
		log.info("clicking on filename tooltip");
		this.createfilenametooltip.click();
	}
	
	public void submitbutton()
	{
		log.info("clicking on submit button");
		this.submitmainform.click();
	}
	
	
	
	
	
	
	
}
