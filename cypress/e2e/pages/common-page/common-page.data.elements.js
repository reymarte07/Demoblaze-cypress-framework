export class CommonPageElements{
    static get topMenu(){
        return {
            //-----------HOME BUTTON-------------
            get home(){
                cy.contains('a', 'Home')
            }, 
            //----------CONTACT BUTTON------------
            get contact(){
                return cy.contains('a', 'Contact')
            },
            //-----------ABOUT US BUTTON-------------
            get aboutUs(){
                return cy.contains ('a', 'About us')
            },
            //----------CART BUTTON--------------
            get cart(){
                return cy.contains ('a', 'Cart')
            },
            //---------CART BUTTON---------------
            get login(){
                return cy.contains ('a', 'Log in')
            },
            //----------CART BUTTON---------------
            get SignUp(){
                return cy.contains ('a', 'Sign up')
            },
            //---------LOG OUT BUTTON------------
            get logout(){
                return cy.get("#logout2")
            }

        };
    }

    static get singedUser(){
        return cy.get('a#nameofuser')
    }
}