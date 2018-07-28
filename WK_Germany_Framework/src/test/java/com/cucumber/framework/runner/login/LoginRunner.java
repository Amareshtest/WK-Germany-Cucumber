package com.cucumber.framework.runner.login;


import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(features = { "classpath:featurefile" }, glue = {
		"classpath:com.cucumber.framework.stepdefinition.Login",
		"classpath:com.cucumber.framework.helper",
		}, plugin = {"html:target/cucumber-html-report","pretty", "json:target/cucumber-reports/Cucumber.json"},monochrome=true
	)
public class LoginRunner extends AbstractTestNGCucumberTests {

}
