export class PlaceOrderElements{
    static get textboxes(){
        return{
            //-----NAME SELECTOR----------
            get name(){
                return cy.get('input#name');
            },
            //------COUNTRY SELECTOR------
            get country(){
                return cy.get('input#country');
            }, 
            //---------CITY SELECTOR----------
            get city(){
                return cy.get('input#city');
            }, 
            //--------CREDIT CARD SELECTOR---------
            get creditCard(){
                return cy.get('input#card');
            },
            //---------MONTH SELECTOR------------
            get month(){
                return cy.get('input#month');
            }, 
            //---------YEAR SELECTOR---------
            get year(){
                return cy.get('input#year');
            },
        };
    }

    static get buttons(){
        return{
            //-------CLOSE BUTTON SELECTOR----------
            get close (){
                return cy.get('div[id="orderModal"] button').eq(1);
            },
            //--------PURCHASE BUTTON SELECTOR----------
            get purchase(){
                return cy.contains('button', 'Purchase');
            }
        }; 
    }
}