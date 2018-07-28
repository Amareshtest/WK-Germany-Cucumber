package com.cucumber.framework.PageObject;

import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import com.cucumber.framework.helper.Logger.LoggerHelper;
import com.cucumber.framework.helper.Wait.WaitHelper;

public class Cases {

	
	WebDriver driver;
	private final Logger log = LoggerHelper.getLogger(Cases.class);
	WaitHelper waitHelper;

	@FindBy(xpath = "//a[@id='link-cases']")
	WebElement CaseLink;

	@FindBy(xpath = "//a[@href='/cases/forms/create']")
	WebElement CaseCreateRecord;

	@FindBy(xpath = "//select[@id='court']")
	WebElement Court;

	@FindBy(xpath = "//select[@id='location']")
	WebElement Location;

	@FindBy(xpath="//input[@id='decisionDate']")
	WebElement Decsiondate;
	@FindBy(xpath="//input[@id='reference']")
	WebElement ReefrenceNumber;
	@FindBy(xpath="//input[@id='resgister']")
	WebElement Register;
	@FindBy(xpath="//input[@id='lfdNo']")
	WebElement LFDNumber;
	@FindBy(xpath="//input[@id='year']")
	WebElement Year;
	@FindBy(xpath="//select[@id='DecisionType']")
	WebElement DecisionType;
	@FindBy(xpath="//i[@data-tooltip='Create File Name']")
	WebElement CreateFilenameTooltip;
	@FindBy(xpath="//input[@id='browse']")
	WebElement BrowseButton;

}
