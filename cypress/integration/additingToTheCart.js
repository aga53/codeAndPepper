import LoginPage from "../pages/po.login";
import InventoryPage from "../pages/po.inventory";
import data from "../testData/td.loginData";

describe("Adding procuct to the cart", () => {
  const loginPage = new LoginPage();
  const inventory = new InventoryPage();

  beforeEach(() => {
    cy.visit(data.basicUrl);
    loginPage.fillUsernameAndPassword(data.correctUsername, data.password);
    loginPage.clickLoginButton();
  });

  it("Add the cheapest product to the cart", () => {
    inventory.chooseTheCheapestProduct();
    cy.get(inventory.shoppingCartLink).should("have.text", 1);
  });
});
