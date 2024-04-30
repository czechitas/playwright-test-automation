import { type Page, type Locator } from "@playwright/test";

export class ProfilePage {
  readonly page: Page;
  readonly loggedInUserMenu: Locator;
  readonly profileMenuOption: Locator;
  readonly passwordInput: Locator;
  readonly passwordConfirmInput: Locator;
  readonly changeButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loggedInUserMenu = page.locator(
      "//*[@id='navbarSupportedContent']//a[@class='dropdown-toggle']",
    );
    this.profileMenuOption = page.locator(
      "//*[@id='navbarSupportedContent']//a[contains(text(), 'Profil')]",
    );
    this.passwordInput = page.locator("//*[@id='password']");
    this.passwordConfirmInput = page.locator("//*[@id='password-confirm']");
    this.changeButton = page.locator("//button[@type='submit']");
  }

  async goToProfilePage() {
    await this.loggedInUserMenu.click();
    await this.profileMenuOption.click();
  }

  async insertPassword(password: string) {
    await this.passwordInput.fill("");
    await this.passwordInput.fill(password);
  }

  async insertPasswordVerification(password: string) {
    await this.passwordConfirmInput.fill(password);
  }

  async clickChangeButton() {
    await this.changeButton.click();
  }
}
