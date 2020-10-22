class Login{

    get emailInput() { return $('#identifierId') };
    get proceedWithEmailButton() { return $('#identifierNext') };
    get passwordInput() { return $("#password") };
    get proceedWithPasswordButton() { return $('#passwordNext') };

    typeEmailAndSubmit(email){
        this.emailInput.waitForDisplayed();
        this.emailInput.keys(email);
        this.proceedWithEmailButton.click();
    }

    typePasswordAndSubmit(passwword){
        this.passwordInput.waitForEnabled(4000);
        this.passwordInput.keys(passwword);
        this.proceedWithPasswordButton.click();
    }
}
module.exports = new Login()
