export class thankYouForYouPurchaseElements {
  static get buttons() {
    return {
      //-----------OK BUTTON SELECTOR-----------
      get ok() {
        return cy.contains("button", "OK");
      },
    };
  }

  //----------------ICON GREEN CHECK MARK VERIFICATION----------
  static get icons() {
    return {
      get greenCheckMark() {
        return cy.get(".sa-success");
      },
    };
  }
}
