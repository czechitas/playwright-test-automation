import { type Page, type Locator } from "@playwright/test";

export class ProfilePage {
  readonly page: Page;
  readonly locators: { [key: string]: Locator };

  constructor(page: Page) {
    this.page = page;
    this.locators = {
      loggedInUserMenu: page.locator(
        "//*[@id='navbarSupportedContent']//a[@class='dropdown-toggle']"
      ),
      profileMenuOption: page.locator(
        "//*[@id='navbarSupportedContent']//a[contains(text(), 'Profil')]"
      ),
      passwordInput: page.locator("//*[@id='password']"),
      passwordConfirmInput: page.locator("//*[@id='password-confirm']"),
      changeButton: page.locator("//button[@type='submit']"),
    };
  }

  async goToProfilePage() {
    await this.locators.loggedInUserMenu.click();
    await this.locators.profileMenuOption.click();
  }

  async insertPassword(password: string) {
    await this.locators.passwordInput.fill("");
    await this.locators.passwordInput.fill(password);
  }

  async insertPasswordVerification(password: string) {
    await this.locators.passwordConfirmInput.fill(password);
  }

  async clickChangeButton() {
    await this.locators.changeButton.click();
  }
}
