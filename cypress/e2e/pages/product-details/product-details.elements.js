export class ProductsDetailsElements{
    static get buttons(){
        return{
            //------ADD TO CART SELECTOR-----
            get addToCart(){
                return cy.contains('a', 'Add to cart')
            },
        };
    }
}