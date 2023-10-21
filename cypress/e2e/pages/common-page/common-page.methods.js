
import { CommonData } from "./commoN-page.data";
import { CommonPageElements } from "./common-page.data.elements";

export class CommonPageMethods{
    static navigateToDemoBlaze(){
        cy.clearAllCookies();
        cy.clearLocalStorage();
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
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
          })
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

    //-------------------GENERATE USERNAME AND PASSWORD RANDOMLY----------------------
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

    //---------VERIFY IF USER IS LOGIN------------
    static verifySignedUser(username){
        CommonPageElements.singedUser.should('have.text', `Welcome ${username}`);
    }

    //---------METHOD TO LOGOUT---------------
    static logout(){
        cy.get('body').then($body=>{
            if($body.find('#logout2[style="display: block;"]').length>0){
                CommonPageElements.topMenu.logout.click();
            }
        })
    }
}