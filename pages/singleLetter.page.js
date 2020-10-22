class SingleLetter{
    
    get recipientInput() { return $(`//textarea[@class='vO']`) };
    get subjectInput() { return $(`//*[@name='subjectbox']`) };
    get mainTextArea() { return $(`//div[@class='Am Al editable LW-avf tS-tW']`) };
    get sendEmailButton() { return $(`//div[@class='T-I J-J5-Ji aoO v7 T-I-atl L3']`)}
    
    fillLetter(recipient, subject, content){
        this.recipientInput.waitForDisplayed();
        this.recipientInput.clearValue();
        this.recipientInput.setValue(recipient);
        this.subjectInput.clearValue();
        this.subjectInput.setValue(subject);
        this.mainTextArea.clearValue();
        this.mainTextArea.setValue(content); 
    }

    sendLetter(){
        this.sendEmailButton.waitForDisplayed();
        this.sendEmailButton.click();
    }

}
module.exports = new SingleLetter()