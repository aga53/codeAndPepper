import LoginPage from "../pages/po.login";
import InventoryPage from "../pages/po.inventory";
import CartPage from "../pages/po.cart";
import data from "../testData/td.loginData";

describe("Login to the application", () => {
  const loginPage = new LoginPage();
  const inventory = new InventoryPage();
  const cart = new CartPage();

  before(() => {
    cy.visit(data.basicUrl);
    loginPage.fillUsernameAndPassword(data.correctUsername, data.password);
    loginPage.clickLoginButton();
    inventory.addToCartSauceLabsBackpack();
  });

  it("Remove product from cart", () => {
    inventory.clickShoppingCartLink();
    cart.removeSauceLabsBackpack();
    cy.get(inventory.shoppingCartLink).should("be.empty");
  });
});
