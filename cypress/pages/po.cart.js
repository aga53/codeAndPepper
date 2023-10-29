class CartPage {
  removeBackpackButton = '[data-test="remove-sauce-labs-backpack"]';
  checkoutButton = '[data-test="checkout"]';

  removeSauceLabsBackpack() {
    cy.get(this.removeBackpackButton).click();
  }

  clickCheckoutButton() {
    cy.get(this.checkoutButton).click();
  }
}
export default CartPage;
