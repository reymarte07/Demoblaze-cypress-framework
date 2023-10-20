import { Logger } from "../../util/logger";
import { CommonPageMethods } from "../common-page/common-page.methods";
import { LoginElements } from "./login.elements";

//----------LOGIN METHODS-------------
export class LoginMethods{

    //--------INSERT USERNAME----------
    static insertUsername(username){
        LoginElements.textboxes.username.invoke('val',username)
    }

    //-------INSERT PASSWORD-------------
    static insertPassword(password){
        LoginElements.textboxes.password.invoke('val',password)
    }

    //---------CLICK ON LOGIN BUTTON-------
    static clickOnLoginButton(){
        LoginElements.buttons.login.click()
    }

    //--------REGISTER STEP BY STEP TO REPRODUCE---------
    static login(username, password){
        Logger.subStep('Insertar username')
        this.insertUsername(username),
        Logger.subStep('Insertar password')
        this.insertPassword(password),
        Logger.subStep('Click on Login button')
        this.clickOnLoginButton()
    }

    static verifyWrongPasswordMessage(){
        CommonPageMethods.verifyAlert('Wrong password.')
    }
}