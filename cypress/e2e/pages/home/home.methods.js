import { HomeElements } from "./home.elements";

export class homeMethods{
    //------------CLICK ON PHONES CATEGORIES-----------------
    static clickOnPhonesOption(){
        HomeElements.categoriesMenu.phones.click();
    }

    //------------CLICK ON LAPTOS CATEGORIES--------------
    static clickOnLaptosOption(){
        HomeElements.categoriesMenu.laptops.click();
    }

    //-----------CLICK ON MONITORS CATEGORIES-----------
    static clickOnMonitorsOption(){
        HomeElements.categoriesMenu.monitors.click();
    }

    //-----------CLICK ON PRDUCT NAME------------------
    static clickOnProductLink(productName){
        HomeElements.product(productName).click();
    }

    //
    static verifyProductDisplayed(productName){
        HomeElements.product(productName).should('be.visible')
    }
}

