import { type Page, type Locator } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly loginMenuLink: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly userMenu: Locator;
  readonly logoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginMenuLink = page.locator(".navbar-right .nav-item");
    this.emailInput = page.locator('//*[@id="email"]');
    this.passwordInput = page.locator('//*[@id="password"]');
    this.loginButton = page.locator('//button[@type="submit"]');
    this.userMenu = page.locator(
      '//*[@id="navbarSupportedContent"]/div[2]/div/a'
    );
    this.logoutButton = page.locator('//*[@id="logout-link"]');
  }

  async clickLoginMenuLink() {
    await this.loginMenuLink.click();
  }

  async insertEmail(email: string) {
    await this.emailInput.fill(email);
  }

  async insertPassword(password: string) {
    await this.passwordInput.fill(password);
  }

  async clickLoginButton() {
    await this.loginButton.click();
  }

  async logout() {
    await this.userMenu.click();
    await this.logoutButton.click();
  }
}
