class Home{

    get accountWindow() { return $(`//img[@class='gb_Ia gbii']`) };
    get exitButton() { return $('#gb_71') };
    get optForAnotherAccount() { return $(`//div[@class='BHzsHc']`) }

    areAccountOptionsPresent(){
        this.accountWindow.waitForDisplayed();
        return this.accountWindow.isEnabled();
    }

    logOut(){
        this.accountWindow.click();
        this.exitButton.waitForDisplayed();
        this.exitButton.click();
    }

    areOptionsPresent(){
        this.optForAnotherAccount.waitForDisplayed();
        return this.optForAnotherAccount.isEnabled();
    }

}
module.exports = new Home()