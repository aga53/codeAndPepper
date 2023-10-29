class InventoryPage {
  pricePlaces = ".inventory_item_description > .pricebar > .inventory_item_price";
  shoppingCartLink = ".shopping_cart_link";
  inventory_item = ".inventory_item";
  addToCartGeneralButton = "button.btn_inventory";
  addToCartBackpack = '[data-test="add-to-cart-sauce-labs-backpack"]'

  chooseTheCheapestProduct() {
    let tab = [];

    cy.get(this.pricePlaces)
      .each((element, index) => {
        let price = parseFloat(element.text().substr(1));
        tab.push({ index: index, price: price });
      })
      .then(() => {
        tab.sort((a, b) => a.price - b.price);
        let cheapestPrice = tab[0].index;
        cy.get(this.inventory_item)
          .eq(cheapestPrice)
          .find(this.addToCartGeneralButton)
          .click();
      });
  }

  clickShoppingCartLink() {
    cy.get(this.shoppingCartLink).click();
  }

  addToCartSauceLabsBackpack(){
  cy.get(this.addToCartBackpack).click()
}

}
export default InventoryPage;
