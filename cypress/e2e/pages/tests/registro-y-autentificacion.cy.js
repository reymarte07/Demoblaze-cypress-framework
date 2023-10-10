import { Logger } from "../../util/logger";
import { CommonData } from "../common-page/commoN-page.data";
import { CommonPageMethods } from "../common-page/common-page.data.methods";
import { SignupMethods } from "../signup/signup.methods";



describe(CommonData.testSuites.registroYAutenticacion, () => {
  it("Registro de usuario válido", () => {
    Logger.stepNumber(1)
    Logger.step('Navegar a la página de inicio')
    CommonPageMethods.navigateToDemoBlaze();

    Logger.stepNumber(2)
    Logger.step('Hacer clic en "Sign up" en la barra de navegación.')
    CommonPageMethods.clickOnSignUpOption();

    Logger.stepNumber(3)
    Logger.step('Completar todos los campos obligatorios con información válida.')
    SignupMethods.insertUsername('lolosada')
    SignupMethods.insertPassword('lolosada')

    Logger.stepNumber(4)
    Logger.step('Hacer clic en "Sign up" para registrar el usuario')
    SignupMethods.clickOnSignupButton();
    Logger.verification('Verificar que se muestre el mensaje "Sign up successful."')
    SignupMethods.verifySignupSuccesfullMessageIsDisplayed();
  });
});



