package com.cucumber.framework.runner.NGC;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(features = { "classpath:featurefile/NGC/NGC_mainform.feature" }, glue = {
		"classpath:com.cucumber.framework.stepdefinition.NGC_MainForm",
		"classpath:com.cucumber.framework.helper",
		}, plugin = {"html:target/cucumber-html-report","pretty", "json:target/cucumber-reports/Cucumber.json"},monochrome=true
	)

public class NgcMainForm extends AbstractTestNGCucumberTests  {

}
