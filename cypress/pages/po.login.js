class LoginPage {
  usernameField = '[data-test="username"';
  passwordField = '[data-test="password"]';
  loginButton = '[data-test="login-button"]';
  titleAfterLogin = ".title";
  errorMessagge_lockedUser = '[data-test="error"]';

  visitBasicUrl(url) {
    cy.visit(url);
  }

  fillUsernameAndPassword(username, password) {
    cy.get(this.usernameField).type(username);
    cy.get(this.passwordField).type(password);
  }

  clickLoginButton() {
    cy.get(this.loginButton).click();
  }

  checkTitleAfterLogin(data) {
    cy.get(this.titleAfterLogin).should("have.text", data);
  }
}
export default LoginPage;
