package com.cucumber.framework.PageObject;

import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import com.cucumber.framework.helper.Logger.LoggerHelper;
import com.cucumber.framework.helper.Wait.WaitHelper;

public class GC {
	
	WebDriver driver;
	private final Logger log = LoggerHelper.getLogger(GC.class);
	WaitHelper waitHelper;

	@FindBy(xpath = "//a[@id='link-legislations']")
	WebElement GC_Link;

	@FindBy(xpath = "//a[@href='/legislations/forms/create']")
	WebElement GCCreateRecordLink;

	@FindBy(xpath = "//select[@id='legislature']")
	WebElement LegislatureDropdown;

	@FindBy(xpath = "//i[@id='createFileName']")
	WebElement CreateFilenameTooltip;

	@FindBy(xpath="//select[@class='versionType']")
    WebElement VersionType;
	
	@FindBy(xpath = "//input[@name='effectiveDateFrom']")
	WebElement Effectivefromdate;

	@FindBy(xpath = "//textarea[@id='officialTitlee']")
	WebElement OfficialTitle;

	@FindBy(xpath = "//input[@name='dateOfLawintern']")
	WebElement DateofIssueDDL;

	@FindBy(xpath = "//input[@id='editorialShortTitle']")
	WebElement Editorialshorttitle;

	@FindBy(xpath = "//input[@id='editorialAbbr']")
	WebElement EditorialAbbreviation;

	@FindBy(xpath = "//a[@id='noLawNumber']")
	WebElement ClassificationNumber;

	@FindBy(xpath = "//select[@name='zalLawFormat.zalMasterDataId']")
	WebElement formatoflaw;

	@FindBy(xpath = "//select[@id='legislationType']")
	WebElement LegislationType;

	@FindBy(xpath="//div[@class='only-msg sucessMsg ']")
	WebElement SuccessalertPopup;
	
	@FindBy(xpath="//a[@id='create-amendement']")
    WebElement NowButton;	
	
	@FindBy(xpath="//i[@data-type='date_start_1']")
	WebElement Amendmentpublishdate;

}
