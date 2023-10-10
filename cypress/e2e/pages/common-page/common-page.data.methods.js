
import { CommonData } from "./commoN-page.data";
import { CommonPageElements } from "./common-page.data.elements";

export class CommonPageMethods{
    static navigateToDemoBlaze(){
        cy.clearCookies();
        cy.visit(CommonData.url);
    }

    static clickOnHomeOptionOption(){
        CommonPageElements.topMenu.home.click();
    }

    static clickOnContactsOption(){
        CommonPageElements.topMenu.contact.click();
    }

    static clickOnAboutUsOption (){
        CommonPageElements.topMenu.aboutUs.click();
    }

    static clickOnCartOption(){
        CommonPageElements.topMenu.cart.click();
    }

    static clickOnLoginOption(){
        CommonPageElements.topMenu.login.click();
    }

    static clickOnSignUpOption(){
        CommonPageElements.topMenu.SignUp.click();
    }

    static verifyAlert(expectedMessage){
        cy.on('window:alert', (str) => {
            expect(str).to.equal(expectedMessage);
          })
    }

}