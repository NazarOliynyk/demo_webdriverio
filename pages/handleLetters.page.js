class HandleLetters{

    get composeButton() { return $(`div.T-I.T-I-KE.L3`) };
    get getAllSentLettersButton() { return $('div.TN.bzz.aHS-bnu') };
   
    openCreateLetterForm(){
        this.composeButton.waitForDisplayed();
        this.composeButton.click();
    }

    getAllSentLettersPage(){
        this.getAllSentLettersButton.waitForDisplayed();
        this.getAllSentLettersButton.click();
    }

}
module.exports = new HandleLetters()