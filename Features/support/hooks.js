var {defineSupportCode} = require('cucumber');
defineSupportCode(function({After,Before}){

Before(function(){
 this.driver.manage().window().setSize(1500, 900);
 return this.driver.manage().window().maximize();
});
After(function(){
this.driver.sleep(2000);
return this.driver.quit();
	});

});