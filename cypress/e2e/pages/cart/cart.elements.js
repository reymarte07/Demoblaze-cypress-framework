export class CartElements {
    //-------------PLACE ORDER BUTTON------------------------
    static get buttons(){
        return{
            get placeOrder(){
                return cy.get('button[data-toggle="modal"]');
            },     
        };
    }

    //---------------DELETE ITEM IN CART-----------------
    //td[text()="Nexus 6"]/ancestor::tr//a
    static get links(){
        return{
            delete(productName){
                return cy.contains('td', productName).closest('tr').find('a');
            }
        }
    }
}