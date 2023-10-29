import LoginPage from "../pages/po.login";
import data from "../testData/td.loginData";

describe("Login to the application", () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.visitBasicUrl(data.basicUrl)
  });

  it("Login successful", () => {
    loginPage.fillUsernameAndPassword(data.correctUsername, data.password);
    loginPage.clickLoginButton();
    loginPage.checkTitleAfterLogin(data.titleAfterSuccessfulLogged);
  });

  it("Logging in with a blocked user", () => {
    loginPage.fillUsernameAndPassword(data.blockedUsername, data.password);
    loginPage.clickLoginButton();
    cy.get(loginPage.errorMessagge_lockedUser).should("have.text", data.errorMessage_lockedOutUser);
  });
});
