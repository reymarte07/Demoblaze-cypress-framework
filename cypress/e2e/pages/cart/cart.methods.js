import { CartElements } from "./cart.elements";

export class CartMethods{
    //--------------CLICK ON DELETE ITEM IN CART------------------
    static clickOnDeleteLink(productName){
        CartElements.links.delete(productName).click();
    }

    //------------VERIFY PRODUCT ALREADY ADDED-----------------
    static verifyProductAdded(productName){
        CartElements.links.delete(productName).should('be.visible')
    }

    //----------VERIFY CART BUTTON IS SHOWN ON PAGE--------
    static verifyCartPageIsShown(){
        cy.url().should('include', 'cart.html')
    }

    //--------CLICK ON PLACE ORDER BUTTON-------------
    static clickOnPlaceOrderButton(){
        CartElements.buttons.placeOrder.click();
    }
}