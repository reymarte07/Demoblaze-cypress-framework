export class HomeElements{
    static get categoriesMenu(){
        return{
            //-----------PHONE SELECTOR----------
            get phones(){
                return cy.contains("a", "Phones")
            }, 
            //----------LAPTO SELECTOR----------
            get laptops(){
                 return cy.contains("a", "Laptops")
            },
            //-----------MONITOR SELECTOR-----------
            get monitors(){
                 return cy.contains('a', 'Monitors')
            },
        };
    }

    //----------PRODUCT NAME SELECTOR-------------
    static product(productName){
        return cy.contains("a", productName);
    }
}