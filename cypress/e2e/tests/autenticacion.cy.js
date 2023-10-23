import { Logger } from "../util/logger";
import { CommonPageMethods } from "../pages/common-page/common-page.methods";
import { LoginMethods } from "../pages/login/login.methods";
import { CommonData } from "../pages/common-page/commoN-page.data";
import { LoginData } from "../pages/login/login.data";

describe(CommonData.testSuites.autenticacion, () => {
  it("Inicio de sesión válido", () => {
    Logger.stepNumber(1);
    Logger.step("Navegar a la página de inicio.");
    CommonPageMethods.navigateToDemoBlaze();

    Logger.stepNumber(2);
    Logger.step('Hacer clic en "Log in" en la barra de navegación.');
    CommonPageMethods.clickOnLoginOption();

    Logger.stepNumber(3);
    Logger.step("Ingresar un nombre de usuario y contraseña válidos.");
    LoginMethods.insertUsername(LoginData.validCredentials.username);
    LoginMethods.insertPassword(LoginData.validCredentials.password);

    Logger.stepNumber(4);
    Logger.step('Hacer clic en "Log in" para iniciar sesión.');
    LoginMethods.clickOnLoginButton();
    Logger.verification(
      "Verificar que se redirige al usuario a la página de inicio."
    );
    CommonPageMethods.verifySignedUser(LoginData.validCredentials.username);

    Logger.postCondition("Log out");
    CommonPageMethods.logout();
  });
});

describe(CommonData.testSuites.autenticacion, () => {
    it('Inicio de sesión inválido', () => {
        Logger.stepNumber(1);
        Logger.step('Navegar a la página de inicio.');
        CommonPageMethods.navigateToDemoBlaze();

        Logger.stepNumber(2);
        Logger.step('Hacer clic en "Log in" en la barra de navegación.');
        CommonPageMethods.clickOnLoginOption();

        Logger.stepNumber(3);
        Logger.step('Ingresar un nombre de usuario y contraseña inválidos.');
        LoginMethods.insertUsername(LoginData.validCredentials.username);
        LoginMethods.insertPassword('contrasenainvalida');

        Logger.stepNumber(4);
        Logger.step('Hacer clic en "Log in" para iniciar sesión.');
        LoginMethods.clickOnLoginButton();
        Logger.verification('Verificar que se muestra un mensaje de error indicando que el inicio de sesión ha fallado.');
        LoginMethods.verifyWrongPasswordMessage();
    })




})