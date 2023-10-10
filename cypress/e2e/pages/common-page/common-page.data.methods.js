
import { CommonData } from "./commoN-page.data";
import { CommonPageElements } from "./common-page.data.elements";

export class CommonPageMethods{
    static navigateToDemoBlaze(){
        cy.clearCookies();
        cy.visit(CommonData.url);
    }

    //------------CLICK ON HOME MENU------------------------------------
    static clickOnHomeOption(){
        CommonPageElements.topMenu.home.click();
    }

    //-----------------CLICK ON CONTACT MENU------------------
    static clickOnContactsOption(){
        CommonPageElements.topMenu.contact.click();
    }

    //--------------CLICK ON ABOUT US MENU--------------------
    static clickOnAboutUsOption (){
        CommonPageElements.topMenu.aboutUs.click();
    }

    //------------CLICK ON CART MENU---------------------
    static clickOnCartOption(){
        CommonPageElements.topMenu.cart.click();
    }

    //-----------CLICK ON LOGIN BUTTON MENU-----------------
    static clickOnLoginOption(){
        CommonPageElements.topMenu.login.click();
    }

    //-------------CLICK ON SINGUP BUTTON---------------------
    static clickOnSignUpOption(){
        CommonPageElements.topMenu.SignUp.click();
    }

    //------------------------WINDOW POP UP ALERT--------------------- 
    static verifyAlert(expectedMessage){
        cy.on('window:alert', (str) => {
            expect(str).to.equal(expectedMessage);
          })
    }

    //------------------- GENERATE USERNAME AND PASSWORD RANDOMLY----------------------
    static generateRandomString(length = 10) {
        let result = "";
        const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
          counter += 1;
        }
        return result;
    }

}