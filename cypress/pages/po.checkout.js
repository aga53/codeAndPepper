export class CheckoutStepOnePage {
  firstNameField = '[data-test="firstName"]';
  lastNameField = '[data-test="lastName"]';
  postalCodeField = '[data-test="postalCode"]';
  continueButton = '[data-test="continue"]';
  finishButton = '[data-test="finish"]';

  typeFirstName() {
    cy.get(this.firstNameField).type("Random");
  }

  typeLastName() {
    cy.get(this.lastNameField).type("User");
  }

  typePostalCode() {
    cy.get(this.postalCodeField).type(12345);
  }

  clickContinueButton() {
    cy.get(this.continueButton).click();
  }
}

export class CheckoutStepTwoPage {
  finishButton = '[data-test="finish"]';

  clickFinishButton() {
    cy.get(this.finishButton).click();
  }
}
