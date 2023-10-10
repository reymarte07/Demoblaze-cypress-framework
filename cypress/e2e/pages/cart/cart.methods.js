import { CartElements } from "./cart.elements";

export class CartMethods{
    //--------------CLICK ON DELETE ITEM IN CART------------------
    static clickOnDeleteLink(productName){
        CartElements.links.delete(productName).click()
    }
}