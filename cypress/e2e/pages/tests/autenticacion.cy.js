import { Logger } from "../../util/logger";
import { CommonData } from "../common-page/commoN-page.data";
import { CommonPageMethods } from "../common-page/common-page.data.methods";
import { LoginData } from "../login/login.data";
import { LoginMethods } from "../login/login.methods";

describe (CommonData.testSuites.autenticacion, ()=>{
    it('Inicio de sesión válido', ()=>{
        Logger.stepNumber(1);
        Logger.step('Navegar a la página de inicio.');
        CommonPageMethods.navigateToDemoBlaze();

        Logger.stepNumber(2);
        Logger.step('Hacer clic en "Log in" en la barra de navegación.');
        CommonPageMethods.clickOnLoginOption();

        Logger.stepNumber(3);
        Logger.step('Ingresar un nombre de usuario y contraseña válidos.');
        LoginMethods.insertUsername(LoginData.validCredentials.username);
        LoginMethods.insertPassword(LoginData.validCredentials.password);

        Logger.stepNumber(4);
        Logger.step('Hacer clic en "Log in" para iniciar sesión.');
        LoginMethods.clickOnLoginButton();
        Logger.verification('Verificar que se redirige al usuario a la página de inicio.');
        CommonPageMethods.verifySignedUser(LoginData.validCredentials.username);
        

    })
})