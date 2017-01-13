
		var ptor = browser.driver;

var helpers = function helpers() {

    var baseAddress = "http://localhost:35315/#";
    var user1 = "kevin.robinsfffon@outlook.com";
    var user1Password = "Eastwood44";
    
    this.login = function () {
        //set window size and navigate to the path where the template is loaded
        browser.driver.manage().window().setSize(1500, 1000);
        browser.driver.get(baseAddress + "login");

        var loginButton = element(by.id('signin'));
        loginButton.click();

        //wait for pop-up fields to be displayed (they are on the page but might be hidden initially)
        browser.driver.sleep(3000);

        //type credentials and click the "access" button to log in
        var emailField = element(by.id("a0-signin_easy_email"));
        emailField.sendKeys(user1);

        var passWordField = element(by.id("a0-signin_easy_password"));
        passWordField.sendKeys(user1Password);

        var accessButton = element(by.css(".a0-notloggedin .a0-primary"));
        accessButton.click();

        browser.driver.sleep(7000);

    };
    
    this.logout = function () {
        browser.driver.get(browser.baseUrl + "/#/home");
        browser.executeScript("window.localStorage.clear();");
    };


    this.expectPanelTitle = function (title) {
        browser.driver.wait(function () {
            return browser.driver.isElementPresent(by.id("pagetitle"));
        }, 5000);
        expect(element(by.id("pagetitle")).getInnerHtml()).toBe(title);
    };

    this.expectPageTitle = function (expected) {

        var actualTitle = element(by.id('pagetitle').getInnerHtml());
        
        expect(actualTitle).toBe(expected);
        //
        // browser.driver.wait(function () {
        //     return ptor.isElementPresent(elm);
        // }, 5000);
        //
        // expect(elm.getInnerHtml()).toBe(title);
    };

    this.expectItemById = function (id, title) {
        browser.driver.wait(function () {
            return browser.driver.isElementPresent(by.id(id));
        }, 5000);
        
        expect(element(by.id(id)).getInnerHtml()).toBe(title);
    };

    //Navigation Helpers
    this.goToPage = function (url) {
        browser.get(baseAddress + url);
        browser.driver.sleep(3000);
    };


    // Form Helpers
    this.fillinTextboxById = function (id, text) {

        var textbox = element(by.id(id));
        textbox.clear();
        textbox.sendKeys(text);
    };

    this.fillinTextboxByName = function (name, text) {

        var textbox = element(by.name(name));
        //xtbox.clear();
        textbox.sendKeys(text);
    };

    this.fillinTextboxByModel = function (name, text) {

        var textbox = element(by.model("html"));
        //xtbox.clear();
        textbox.sendKeys(text);
    };


    this.waitForandClickById = function (id) {
        browser.driver.wait(function () {
            return browser.driver.isElementPresent(id);
        }, 8000);
        var loginButton = element(by.id(id));
        loginButton.click();
    };


    this.clickCreate = function () {
        this.waitForandClickById("Create");
    };


    this.clickSave = function () {
        element(by.id("save")).click();
    };

    this.sleep = function (secs) {
        browser.driver.sleep(secs * 1000);
    };


    ////////////////////////////////////////////////////
    // Repeaters    
    this.expectRepeaterToHaveValues = function (repeater) {
        var count = element.all(by.repeater(repeater)).count();
        expect(count).toBeGreaterThan(0);
    };

    this.clickOnFirstDetailsLink = function (repeater) {
        element.all(by.repeater(repeater)).first().element(by.id('details')).click();
    };
    
    this.clickOnFirstEditLink = function (repeater) {
        element.all(by.repeater(repeater)).first().element(by.id('edit')).click();
    };

    this.expectNOTtoHaveAnError = function () {
        var errormessage = element(by.id("errorMessage")).isDisplayed();
        expect(errormessage).toBeFalsy();

    };

    this.modalShouldbeVisible = function () {
        var elm = element(by.className('modal-dialog')).isDisplayed();
        expect(elm).toBeTruthy();
    };



    this.expectPageTitle = function (title) {
        var elementToFind = by.id('pagetitle');

        browser.driver.findElement(elementToFind).then(function(element){
            expect(element.getAttribute('innerHTML')).toEqual(title);
        }, 8000);

        // browser.driver.wait(function () {
        //
        //     return browser.driver.isElementPresent(element(by.id('pagetitle')));
        // }, 8000);
        //
        // var pageTitle = element(by.id('pagetitle')).getAttribute('innerHTML');
        // expect(pageTitle).toEqual(title);
    };

};

//
//
// this.login = function(){
//     //set window size and navigate to the path where the template is loaded
//     browser.driver.manage().window().setSize(1500, 1000);
//     browser.driver.get("http://localhost:3001/#/login");
//
//     var loginButton = element(by.id('signin'));
//     loginButton.click();
//
//     //wait for pop-up fields to be displayed (they are on the page but might be hidden initially)
//     browser.driver.sleep(2000);
//
//     //type credentials and click the "access" button to log in
//     var emailField = element(by.id("a0-signin_easy_email"));
//     emailField.sendKeys("kevin.robinson@volunteernow.co.uk");
//
//     var passWordField = element(by.id("a0-signin_easy_password"));
//     passWordField.sendKeys("Eastwood44");
//
//     var accessButton = element(by.css(".a0-notloggedin .a0-primary"));
//     accessButton.click();
//
//     browser.driver.sleep(7000);
// };
// //
// this.loginUser2 = function(){
//     //set window size and navigate to the path where the template is loaded
//     browser.driver.manage().window().setSize(1500, 1000);
//     browser.driver.get("http://localhost:35315/#/login");
//
//     //check if login button is present & visible
//     var loginButtonExists = element(by.id("signin"));
//     browser.driver.wait(function() {
//         return browser.driver.isElementPresent(loginButtonExists);
//     }, 4000);
//     var loginButton = element(by.id("signin"));
//     loginButton.click();
//
//     //check if email field exists to see if the pop-up has been succesfully loaded
//     var emailFieldExists = by.id("a0-signin_easy_email");
//     browser.driver.wait(function() {
//         return browser.driver.isElementPresent(emailFieldExists);
//     }, 5000);
//     //wait for pop-up fields to be displayed (they are on the page but might be hidden initially)
//     browser.driver.sleep(2000);
//
//     //type credentials and click the "access" button to log in
//     var emailField = element(by.id("a0-signin_easy_email"));
//     emailField.sendKeys("kevin.robinsfffon@outlook.com");
//     //emailField.sendKeys("john.smith@test.com");
//
//     var passWordField = element(by.id("a0-signin_easy_password"));
//     passWordField.sendKeys("Windows01");
//     var accessButton = element(by.css(".a0-notloggedin .a0-primary"));
//     accessButton.click();
//     browser.driver.sleep(4000);
// };
module.exports = new helpers();
