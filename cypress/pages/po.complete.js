class CheckoutComplete {
  completeHeader = ".complete-header";

  checkTextOfSuccessfulShopping() {
    return cy.get(this.completeHeader).invoke("text");
  }
}

export default CheckoutComplete;
