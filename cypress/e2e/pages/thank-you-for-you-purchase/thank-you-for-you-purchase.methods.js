import { thankYouForYouPurchaseElements } from "./thank-you-for-you-purchase.elements";

export class thankYouForYouPurchaseMethods{
    static clickOnOKButton(){
        thankYouForYouPurchaseElements.buttons.ok.click();
    }

    static verifyGreenCheckMarkIsDisplayed(){
        thankYouForYouPurchaseElements.icons.greenCheckMark.should("exist");
    }
}