export class SignupElements {
    static get textboxes() {
        return {
            //----INPUT USERNAME SELECTOR------
            get username() {
                return cy.get('input#sign-username')
            },
            //----INPUT PASSWORD SELECTOR-----
            get password() {
                return cy.get('input#sign-password')
            },
        };
    }

    static get buttons() {
        return {
            //---CLOSE BUTTON SELECTOR
            get close() {
                return cy.contains('button', 'Close').eq(1)
            },

            //----SIGNUP BUTTON SELECTOR 
            get signup() {
                return cy.contains('button', 'Sign up')
            }
        }
    }
}