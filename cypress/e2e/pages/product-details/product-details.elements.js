export class ProductsDetailsElements{
    static get buttons(){
        return{
            //------ADD TO CART SELECTOR-----
            get addToCart(){
                cy.contains('a', 'Add to cart')
            },
        };
    }
}