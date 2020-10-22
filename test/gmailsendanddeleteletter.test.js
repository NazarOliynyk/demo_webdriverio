const loginPage = require("../pages/login.page");
const homePage = require("../pages/home.page");
const handleLettersPage = require("../pages/handLeLetters.page");
const singleLetterPage = require("../pages/singleLetter.page");
const sentLettersPage = require("../pages/sentLetters.page");
const testData = require('../resources/testdata.js')
const { assert } = require("chai");

describe('Log into account, Send letter, Delete Letter', function(){

    it('should log into account', () =>{
        browser.url('/');
        loginPage.typeEmailAndSubmit(testData.login);
        browser.pause(1000)
        loginPage.typePasswordAndSubmit(testData.password);
        assert.equal(true, homePage.areAccountOptionsPresent());
    })

    it('should send the letter', () =>{
        
        handleLettersPage.openCreateLetterForm();
        singleLetterPage.fillLetter(testData.recipient, testData.subject, testData.content);
        singleLetterPage.sendLetter();
        handleLettersPage.getAllSentLettersPage();
        assert.equal(testData.subject, sentLettersPage.getLastLetterSubject())
    })

    it('should delete the last sent letter', () =>{
        var sizeBeforeDelete = sentLettersPage.getSizeOfLettersList();
        sentLettersPage.deleteLastLetter();
        assert.notEqual(sizeBeforeDelete, sentLettersPage.getSizeOfLettersList());
    })

})
// npm run test -- --spec ./test/gmailsendanddeleteletter.test.js
// npm run test --suite gmail
// allure generate --clean
// allure open
