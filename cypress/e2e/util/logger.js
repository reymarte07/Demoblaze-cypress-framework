export class Logger{
    //---------REGISTER EACH STEP OF THE TEST CASE------------
    static stepNumber(number){
        const text= `Step # ${number}`
        cy.log(text)
        cy.allure().step(text)
    }

    //----------REGISTER THE DESCRIPTION OF THE STEP-----------
    static step(description){
        const text= `Step - ${description}`
        cy.log(text)
        cy.allure().step(text)
    }

    //-------------REGISTER THE VERIFICATION OF THE STEP-----------
    static verification (description){
        const text = `Verification - ${description}`
        cy.log(text)
        cy.allure().step(text)
    }

    static subStep (description){
        const text = `Substep - ${description}`
        cy.log(text)
        cy.allure().step(text)
    }

    static subVerification (description){
        const text = `Subverification - ${description}`;
        cy.log(text);
        cy.allure().step(text)
    }

    static postCondition (description){
        const text = `POSTCONDITION - ${description}`
        cy.log(text)
        cy.allure().step(text)
    }
    
}