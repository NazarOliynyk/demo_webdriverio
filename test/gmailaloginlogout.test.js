
const loginPage = require("../pages/login.page");
const homePage = require("../pages/home.page");
const testData = require('../resources/testdata.js')
const { assert } = require("chai");

describe('Log into account. Log out of the account', function(){

    it('should log into account and log out', () =>{
        
        browser.url('/');
        loginPage.typeEmailAndSubmit(testData.login);
        browser.pause(1000)
        loginPage.typePasswordAndSubmit(testData.password);
        assert.equal(true, homePage.areAccountOptionsPresent());
        homePage.logOut();
        assert.equal(true, homePage.areOptionsPresent());
    })

})
// npm run test -- --spec ./test/gmailaloginlogout.test.js
