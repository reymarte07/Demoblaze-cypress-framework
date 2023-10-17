import { PlaceOrderElements } from "./place-order.elements";

//---------PLACE ORDER METHODS--------
export class PlaceOrderMethods{

    //------INSERT USERNAME-------
    static insertName(name){
        PlaceOrderElements.textboxes.name.invoke('val', name);
    }

    //--------INSERT COUNTRY---------
    static insertCountry(country){
        PlaceOrderElements.textboxes.country.invoke('val', country);
    }

    //--------INSERT CITY-----------
    static insertCity(city){
        PlaceOrderElements.textboxes.city.invoke('val', city);
    }

    //-------INSERT CREDIT CARD-------
    static insertCreditCard(creditCard){
        PlaceOrderElements.textboxes.creditCard.invoke('val', creditCard);
    }

    //-------INSERT MONTH----------
    static insertMonth(month){
        PlaceOrderElements.textboxes.month.invoke('val', month)
    }

    //-------INSERT YEAR---------    
    static insertYear (year){
        PlaceOrderElements.textboxes.year.invoke('val', year)
    }

    //---------CLICK ON CLOSE BUTTON------ 
    static clickOnCloseButton(){
        PlaceOrderElements.buttons.close.click();
    }

    //----------CLICK ON PURCHASE BUTTON----------
    static clickOnPurchaseButton(){
        PlaceOrderElements.buttons.purchase.click();
    }

    static insertOrderInformation(data){
        this.insertName(data.name)
        this.insertCountry(data.country)
        this.insertCity(data.city)
        this.insertCreditCard(data.creditCardNumber)
        this.insertMonth(data.month)
        this.insertYear(data.year)
    }

}