import { CommonData } from "./commom-page.data";
import { CommonPageElements } from "./commom-page.data.elements";

export class CommomPageMethods{
    static navigateToDemoBlaze(){
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

}