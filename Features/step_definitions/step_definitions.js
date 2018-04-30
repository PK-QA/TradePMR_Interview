
var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given,Then}) {
   
 Given('I navigate to TradePMR Web Application', function(){
           // Write code here that turns the phrase above into concrete actions
           return this.driver.get("localhost:3000")
           
           
         });

 Then('I expect the Page Title is TPMR Account Signup', function() {
           // Write code here that turns the phrase above into concrete actions
          
         });
 Then('I Enter My Name', function () {
           // Write code here that turns the phrase above into concrete actions
           
         });
 Then('I Enter My Age', function () {
           // Write code here that turns the phrase above into concrete actions
        
         });
  Then('I Enter Password', function () {
           // Write code here that turns the phrase above into concrete actions
          
         });
   Then('I Retype My Passoword to confirm the password', function () {
           // Write code here that turns the phrase above into concrete actions
       
         });
   Then('I Enter My Hobby', function () {
           // Write code here that turns the phrase above into concrete actions
       
         });
   Then('I Add Hobby', function () {
           // Write code here that turns the phrase above into concrete actions
       
         });
});

