import { type Page, type Locator } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly locators: { [key: string]: Locator };

  constructor(page: Page) {
    this.page = page;
    this.locators = {
      loginMenuLink: page.locator(".navbar-right .nav-item"),
      emailInput: page.locator('//*[@id="email"]'),
      passwordInput: page.locator('//*[@id="password"]'),
      loginButton: page.locator('//button[@type="submit"]'),
      userMenu: page.locator('//*[@id="navbarSupportedContent"]/div[2]/div/a'),
      logoutButton: page.locator('//*[@id="logout-link"]'),
    };
  }

  async clickLoginMenuLink() {
    await this.locators.loginMenuLink.click();
  }

  async insertEmail(email: string) {
    await this.locators.emailInput.fill(email);
  }

  async insertPassword(password: string) {
    await this.locators.passwordInput.fill(password);
  }

  async clickLoginButton() {
    await this.locators.loginButton.click();
  }

  async logout() {
    await this.locators.userMenu.click();
    await this.locators.logoutButton.click();
  }
}
