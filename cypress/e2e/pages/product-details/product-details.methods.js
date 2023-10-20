import { CommonPageMethods } from "../common-page/common-page.methods";
import { ProductsDetailsElements } from "./product-details.elements";

export class ProductDetailsMethods{
    //------CLICK ON ADD TO CART METHOD-----
    static clickOnAddToCart(){
        ProductsDetailsElements.buttons.addToCart.click();
    }

    //-------VERIFY PRODUCT DETAILS DISPLAYED ON PAGE------
    static verifyProductDetailsPageDisplayed(){
        ProductsDetailsElements.buttons.addToCart.should('be.visible')
    }

    //--------VERIFY MESSAGE WHEN A PRODUCT IS ADD TO CART----
    static verifyProductAddedMessage(){
        CommonPageMethods.verifyAlert('Product added.')
    }
}