import { Logger } from "../../util/logger";
import { CommonData } from "../common-page/commoN-page.data";
import { CommonPageMethods } from "../common-page/common-page.data.methods";
import { LoginData } from "../login/login.data";
import { SignupMethods } from "../signup/signup.methods";
const user = CommonPageMethods.generateRandomString(10);
const password = CommonPageMethods.generateRandomString(7);
const existingUser= LoginData.validCredentials.username

//----------------TEST SUITE-----------------------------
describe(CommonData.testSuites.registro, () => {
  //------------------TEST CASE----------------
  it("Registro de usuario válido", () => {

    //--------------STEPS TO REPRODUCE------------------
    Logger.stepNumber(1)
    Logger.step('Navegar a la página de inicio')
    CommonPageMethods.navigateToDemoBlaze();

    Logger.stepNumber(2)
    Logger.step('Hacer clic en "Sign up" en la barra de navegación.')
    CommonPageMethods.clickOnSignUpOption();

    Logger.stepNumber(3)
    Logger.step('Completar todos los campos obligatorios con información válida.')
    //--------------INSERT LOGIN--------------
    SignupMethods.insertUsername(user)
    SignupMethods.insertPassword(password)

    Logger.stepNumber(4)
    Logger.step('Hacer clic en "Sign up" para registrar el usuario')
    SignupMethods.clickOnSignupButton();
    Logger.verification('Verificar que se muestre el mensaje "Sign up successful."')
    SignupMethods.verifySignupSuccesfullMessageIsDisplayed();
  });

  it("Registro de usuario inválido", () => {

    //--------------STEPS TO REPRODUCE------------------
    Logger.stepNumber(1)
    Logger.step('Navegar a la página de inicio')
    CommonPageMethods.navigateToDemoBlaze();

    Logger.stepNumber(2)
    Logger.step('Hacer clic en "Sign up" en la barra de navegación.')
    CommonPageMethods.clickOnSignUpOption();

    Logger.stepNumber(3)
    Logger.step('Completar todos los campos obligatorios con información inválida.')
    //--------------INSERT LOGIN--------------
    SignupMethods.insertUsername(existingUser)
    SignupMethods.insertPassword(password)

    Logger.stepNumber(4)
    Logger.step('Hacer clic en "Sign up" para registrar el usuario')
    SignupMethods.clickOnSignupButton();
    Logger.verification('Verificar que se muestra un mensaje de error indicando los campos invalidos.')
    SignupMethods.verifyThatisUserAlreadyExistMessageIsDesplayed();
  });

});



