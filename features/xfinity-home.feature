Feature: As a xfinity customer, I want to be able to navigate to landing poage so that I can view product information


# Click to Open Account - CUSTOMER REGISTRATION
@xfinity @xfinityLogin
  Scenario: Customer is displayed with xfinity.com landing page
    Given I am on the xfinity page
    When I click on "loginButton" 
    Then I should see "loginHeader"

@xfinityinternet
  Scenario:Customer is disblyed with xfinity.com
    Given I am on the xfinity page
    When I scroll to "internetoption"
    When I click on "internetoption"
    Then I should see "internetplan"
	
@xfinityplan
  Scenario:Customer is disblyed with xfinity.com
    Given I am on the xfinity page
    When I scroll to "buildyourplan"
    When I click on "buildyourplan"
    Then I should see "planButton"


@xfinitywifipass
 Scenario:Customer is displayed with xfinity page
    Given I am on the xfinity page
    When I click on "loginButton"
    #When I scroll to "wifipass"
    #When I click on "getnowwifipassbutton"
    #Then I should see "hotspotbutton"
    #When I click on "planButton"
    #Then I should see "invaliderrormsg"
    #When I click on "inputname"
    When I enter username "username"
    And I click on "letsgo"
    Then I should see "passwordheader"

  

 