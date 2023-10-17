import { CartElements } from "./cart.elements";

export class CartMethods{
    //--------------CLICK ON DELETE ITEM IN CART------------------
    static clickOnDeleteLink(productName){
        CartElements.links.delete(productName).click()
    }

    //------------VERIFY PRODUCT ALREADY ADDED-----------------
    static verifyProductAdded(productName){
        CartElements.links.delete(productName).should('be.visible')
    }
}