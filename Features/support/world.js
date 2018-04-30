var {setWorldConstructor} = require('cucumber');
var seleniumWebdriver = require('selenium-webdriver');


require('chromedriver');
var chrome = require ('selenium-webdriver/chrome')
var {defineSupportCode} = require('cucumber');
var {setDefaultTimeout} = require('cucumber');

function CustomWorld() {
 this.driver = new seleniumWebdriver.Builder()
    .forBrowser('chrome')
    .build();

  
  }
  defineSupportCode(function({setWorldConstructor})

  {
  	setWorldConstructor(CustomWorld)
    setDefaultTimeout(60 * 1000)
  });
