Feature: TPMR Account Signup
  As a new Prospective customer 
  I Want to be able to Fill out Registration From to get Signed UP on TradePMR Web Application


	Scenario: Filling Out Required Personal Information to get signed up with the App
		Given I navigate to TradePMR Web Application
		Then I expect the Page Title is TradePMR Account Signup
		Then I Enter My Name
		And I Enter My Age
		And I Enter Password
		And  I Retype My Passoword to confirm the password
		And I Enter My Hobby
		Then I Add My Hobby 
	