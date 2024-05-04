import { expect, type Locator, type Page } from "@playwright/test";
import { NavigationBar } from "../components/navigation-bar";

export class RegistrationPage {
  readonly page: Page;
  readonly navigationBar: NavigationBar;
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly passwordConfirmationInput: Locator;

  readonly submitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.navigationBar = new NavigationBar(page);

    this.nameInput = page.getByLabel("Jméno a příjmení");
    this.emailInput = page.getByLabel("Email");
    this.passwordInput = page.getByLabel("Heslo");
    this.passwordConfirmationInput = page.getByLabel("Kontrola hesla");

    this.submitButton = page.getByRole("button", { name: "Zaregistrovat" });
  }

  async visit() {
    await this.page.goto("/registrace");
  }

  async fillName(name: string) {
    await this.nameInput.fill(name);
  }

  async fillEmail(email: string) {
    await this.emailInput.fill(email);
  }

  async fillPassword(password: string) {
    await this.passwordInput.fill(password);
  }

  async fillPasswordConfirmation(password: string) {
    await this.passwordConfirmationInput.fill(password);
  }

  async submit() {
    await this.submitButton.click();
  }

  async register(name: string, email: string, password: string) {
    await this.fillName(name);
    await this.fillEmail(email);
    await this.fillPassword(password);
    await this.fillPasswordConfirmation(password);
    await this.submit();
  }

  // ASSERTATIONS

  async expectCurrentUrl(expected: string) {
    await expect(this.page.url()).toContain(expected);
  }

  async expectErrorToastToHaveText(expected: string) {
    const toast = this.page.locator("div.toast");
    await expect(toast).toHaveText(expected);
  }

  async expectErrorFeedbackToHaveText(expected: string) {
    const feedback = this.page.getByRole("alert");
    await expect(feedback).toHaveText(expected);
  }

  async expectPasswordInputIsEmpty() {
    await expect(this.passwordInput).toHaveValue("");
  }

  async expectPasswordConfirmationInputIsEmpty() {
    await expect(this.passwordConfirmationInput).toHaveValue("");
  }
}
