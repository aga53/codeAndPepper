import LoginPage from "../pages/po.login";
import InventoryPage from "../pages/po.inventory";
import CartPage from "../pages/po.cart";
import { CheckoutStepOnePage, CheckoutStepTwoPage } from "../pages/po.checkout";
import CheckoutComplete from "../pages/po.complete";
import data from "../testData/td.loginData";

describe("Finalizing order", () => {
  const loginPage = new LoginPage();
  const inventory = new InventoryPage();
  const cart = new CartPage();
  const checkoutStepOne = new CheckoutStepOnePage();
  const checkoutStepTwo = new CheckoutStepTwoPage();
  const complete = new CheckoutComplete();

  before(() => {
    cy.visit(data.basicUrl);
    loginPage.fillUsernameAndPassword(data.correctUsername, data.password);
    loginPage.clickLoginButton();
    inventory.addToCartSauceLabsBackpack();
    inventory.clickShoppingCartLink();
  });

  it("Add the cheapest product to the cart", () => {
    cart.clickCheckoutButton();
    checkoutStepOne.typeFirstName();
    checkoutStepOne.typeLastName();
    checkoutStepOne.typePostalCode();
    checkoutStepOne.clickContinueButton();
    checkoutStepTwo.clickFinishButton();
    complete.checkTextOfSuccessfulShopping().then((text) => {
      expect(text).to.eq("Thank you for your order!");
    });
  });
});
