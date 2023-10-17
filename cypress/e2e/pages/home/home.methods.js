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

    //--------VERIFY A PRODUCT IS SHOWN----------------
    static verifyProductDisplayed(productName){
        HomeElements.product(productName).should('be.visible')
    }

     //----------VERIDY HOME BUTTON IS SHOWN ON PAGE--------
     static verifyHomePageIsShown(){
        cy.url().should('include', 'index.html')
    }
}

