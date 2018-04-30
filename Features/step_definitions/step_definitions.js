
var {defineSupportCode} = require('cucumber');
var seleniumWebdriver = require('selenium-webdriver');
var By= seleniumWebdriver.By;

defineSupportCode(function({Given,Then}) {
   
 Given('I navigate to TradePMR Web Application', function(){
           
           return this.driver.get("localhost:3000")
           
           
         });

 Then('I expect the Page Title is TradePMR Account Signup', function() {
           
        return  this.driver.getTitle().then(function(title) {
         console.log("The Page Title is: " + title)
     });
   
         });
 Then('I Enter My Name', function () {
           
           
           	return this.driver.findElement(By.id('name')).sendKeys('Test Automation')
          

         });
 Then('I Enter My Age', function () {
           return this.driver.findElement(By.id('age')).sendKeys('20')
        
         });
  Then('I Enter Password', function () {
         return this.driver.findElement(By.id('password')).sendKeys('tradepmr123')
          
         });
   Then('I Retype My Passoword to confirm the password', function () {
           return this.driver.findElement(By.id('passwordConfirm')).sendKeys('tradepmr123')
       
         });
   Then('I Enter My Hobby', function () {
           return this.driver.findElement(By.id('hobby')).sendKeys('Automation Testing')
       
         });
   Then('I Add My Hobby', function () {
            this.driver.findElement(By.xpath('//button[text()="Add"]')).click()
           this.driver.findElement(By.xpath('//fieldset/ul')).getText().then(function (hobbycheck){
        console.log("You have successfully added following hobby:- "+ hobbycheck)

           });
       
         });
});

