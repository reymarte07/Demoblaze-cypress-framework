import { CommonPageMethods } from "../common-page/common-page.data.methods";
import { SignupElements } from "./signup.elements";

    //----------SING UP METHOD----------
export class SignupMethods {
    //------ INSERT USERNAME--------
    static insertUsername(username) {
        SignupElements.textboxes.username.invoke("val", username)
    }
    //---------INSERT PASSWORD--------
    static insertPassword(password) {
        SignupElements.textboxes.password.invoke("val", password)
    }
    //----------CLICK ON SIGN UP BUTTON--------
    static clickOnSignupButton() {
        SignupElements.buttons.signup.click();
    }
    //--------SIGN UP METHOD---------
    static signup(username, password) {
        this.insertUsername(username);
        this.insertPassword(password);
        this.clickOnSignupButton();
    }

    //--------VERIFY SIGN UP SUCCESSFULLY MESSAGE DISPLAYED----------- 
    static verifySignupSuccesfullMessageIsDisplayed(){
        CommonPageMethods.verifyAlert("Sign up successful.")
    }
}