import { LoginMethods } from "./pages/login/login.methods";
import { Logger } from "./util/logger";

describe('template spec', () => {
  it('passes', () => {
    const usuario = 'random01';
    const contrasena = 'random01';

    Logger.stepNumber(1)
    Logger.step('Navigate to Demoblaze page')
    cy.visit('https://www.demoblaze.com/')

    
    Logger.stepNumber(2)
    Logger.step('Click on "Login" Link')
    cy.get('a[data-target="#logInModal"]').click()

    Logger.stepNumber(3)
    Logger.step(`Login with this credentials: "${usuario}/${contrasena}"`)
    LoginMethods.login(usuario, contrasena)
    Logger.verification(`The Home page should show "Welcome ${usuario}" text`)
    cy.get('a#nameofuser').should('contain.text', usuario)

  })
})