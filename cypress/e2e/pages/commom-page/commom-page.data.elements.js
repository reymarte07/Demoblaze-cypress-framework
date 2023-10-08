export class CommonPageElements{
    static get topMenu(){
        return {
            get home(){
                cy.contains('a', 'Home')
            }, 
            get contact(){
                return cy.contains('a', 'Contact')
            },
            get aboutUs(){
                return cy.contains ('a', 'About us')
            },
            get cart(){
                return cy.contains ('a', 'Cart')
            },
            get login(){
                return cy.contains ('a', 'Log in')
            },
            get SignUp(){
                return cy.contains ('a', 'Sign up')
            }

        };
    }
}