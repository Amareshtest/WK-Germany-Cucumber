package com.cucumber.framework.runner.Case;


import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;


@CucumberOptions(features = { "classpath:featurefile/Cases/CaseMainform.feature" }, glue = {
		"classpath:com.cucumber.framework.stepdefinition.Case",
		"classpath:com.cucumber.framework.helper",
		}, plugin = {"html:target/cucumber-html-report","pretty", "json:target/cucumber-reports/Cucumber.json"},monochrome=true
	)

public class Case_mainform extends AbstractTestNGCucumberTests {

}
