import { HomeElements } from "./home.elements";

export class homeMethods{
    static clickOnPhonesOption(){
        HomeElements.categoriesMenu.phones.click();
    }

    static clickOnLaptosOption(){
        HomeElements.categoriesMenu.laptops.click();
    }

    static clickOnMonitorsOption(){
        HomeElements.categoriesMenu.monitors.click();
    }

    static clickOnProductLink(productName){
        HomeElements.product(productName).click();
    }
}