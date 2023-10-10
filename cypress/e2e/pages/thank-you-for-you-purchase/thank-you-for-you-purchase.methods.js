import { thankYouForYouPurchaseElements } from "./thank-you-for-you-purchase.elements";

//-------------THANK FOR YOUR PURCHASE METHOD-----------
export class thankYouForYouPurchaseMethods{
        //----------------CLICK ON OK BUTTON---------------
    static clickOnOKButton(){
        thankYouForYouPurchaseElements.buttons.ok.click();
    }

    //---------------VERIFY GREEN CHECK MARK DESPLAYED METHOD--------------------
    static verifyGreenCheckMarkIsDisplayed(){
        thankYouForYouPurchaseElements.icons.greenCheckMark.should("exist");
    }
}