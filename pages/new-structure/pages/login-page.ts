import { expect, type Locator, type Page } from "@playwright/test";
import { NavigationBar } from "../components/navigation-bar";

export class LoginPage {
  readonly page: Page;
  readonly navigationBar: NavigationBar;

  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly submitButton: Locator;
  readonly forgotPasswordLink: Locator;

  readonly registerButton: Locator;

  readonly errorFeedback: Locator;
  readonly errorToast: Locator;

  constructor(page: Page) {
    this.page = page;

    this.navigationBar = new NavigationBar(page);

    this.usernameInput = page.locator("input#username");
    this.passwordInput = page.locator("input#password");
    this.submitButton = page.locator("button", { hasText: "Přihlásit" });
    this.forgotPasswordLink = page.locator("a", {
      hasText: "Zapomněli jste své heslo?",
    });

    this.registerButton = page.locator("a", { hasText: "Zaregistrujte se" });

    this.errorFeedback = page.locator("span.invalid-feedback");
    this.errorToast = page.locator("div.toast");
  }

  async visit() {
    await this.page.goto("/prihlaseni");
  }

  async login(username: string, password: string) {
    await this.fillUsername(username);
    await this.fillPassword(password);
    await this.submitButton.click();
  }

  async fillUsername(username: string) {
    await this.usernameInput.fill(username);
  }

  async fillPassword(password: string) {
    await this.passwordInput.fill(password);
  }

  async expectErrorToastToHaveText(expected: string) {
    await expect(this.errorToast).toHaveText(expected);
  }

  async expectErrorFeedbackToHaveText(expected: string) {
    await expect(this.errorFeedback).toHaveText(expected);
  }

  async expectErrorFeedbackIsVisible() {
    await expect(this.errorFeedback).toBeVisible();
  }

  async expectErrorFeedbackIsNotVisible() {
    await expect(this.errorFeedback).not.toBeVisible();
  }

  async expectErrorToastIsVisible() {
    await expect(this.errorToast).toBeVisible();
  }

  async expectWarningAroundEmailInput() {
    await expect(this.usernameInput).toHaveClass("form-control is-invalid");
  }
}
