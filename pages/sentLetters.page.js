const testData = require('../resources/testdata.js')

class SentLetters{

    LETTER_ITEM_LOCATOR = "//div[@class='BltHke nH oy8Mbf']//div[@class='Cp' and preceding-sibling::div[@class='Cp']]//table/tbody";

    get allLetters() { return $(this.LETTER_ITEM_LOCATOR) };
    get subjectOfTheLastLetterTag() { return $(this.LETTER_ITEM_LOCATOR + `/tr[1]//span[@class='bog']/span`) };
    get selectLastLetterCheckBox() { return $(this.LETTER_ITEM_LOCATOR + `/tr[1]/td[@class='oZ-x3 xY']`) };
    get deleteSelectedLetterButton() { return $(this.LETTER_ITEM_LOCATOR + `/tr[1]/td[@class='bq4 xY']/ul/li[@class='bqX bru']`) }

    getSizeOfLettersList(){
        
        this.allLetters.waitForDisplayed();
        let arr =[];
        arr= this.allLetters.getText().split(" ");
        var subjectCount=[];
        arr.forEach(element => {
            if(element=== testData.subjectCount+"\n"){
                subjectCount.push(element);
            }
        });
        return subjectCount.length;
    }

    getLastLetterSubject(){
        this.subjectOfTheLastLetterTag.waitForDisplayed();
        return this.subjectOfTheLastLetterTag.getText();
    }

    deleteLastLetter(){
        this.selectLastLetterCheckBox.waitForDisplayed();
        this.selectLastLetterCheckBox.click();
        this.deleteSelectedLetterButton.click();
    }
}
module.exports = new SentLetters()