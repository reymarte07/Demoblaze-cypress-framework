export class LoginElements {
    static get textboxes(){
       return{
        //------------USERNAME SELECTOR -------------
        get username(){
            return cy.get('input#loginusername');
        }, 
        //-----------PASSWORD SELECTOR-----------
        get password(){
            return cy.get('input#loginpassword');
        },
       };
    }

    static get buttons(){
        return{
            //-------CLOSE BUTTON SELECTOR-------
            get close(){
                return cy.get('div[id="logInModal"] button').eq(1);
            },
            //-------LOGIN BUTTON SELECTOR-----
            get login(){
                return cy.contains('button', 'Log in');
            }
        }
    }
}