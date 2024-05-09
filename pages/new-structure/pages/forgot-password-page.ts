import { Locator, Page } from "playwright";
import { expect } from "playwright/test";

export class ForgotPasswordPage {
  readonly page: Page;
  readonly emailInput: Locator;

  readonly submitButton: Locator;
  readonly errorFeedback: Locator;

  readonly allerSuccess: Locator;
  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.locator("input#email");
    this.submitButton = page.locator("button", { hasText: "Resetovat heslo" });
    this.errorFeedback = page.locator("span.invalid-feedback");
    this.allerSuccess = page.locator("div.alert-success");
  }

  async visit() {
    await this.page.goto("/zapomenute-heslo");
  }

  async fillEmail(email: string) {
    await this.emailInput.fill(email);
  }

  async submit() {
    await this.submitButton.click();
  }

  async expectErrorFeedbackToHaveText(expected: string) {
    await expect(this.errorFeedback).toHaveText(expected);
  }

  async expectErrorFeedbackIsVisible() {
    await expect(this.errorFeedback).toBeVisible();
  }

  async expectSuccessAlertToHaveText(expected: string) {
    await expect(this.allerSuccess).toHaveText(expected);
  }

  async expectSuccessAlertIsVisible() {
    await expect(this.allerSuccess).toBeVisible();
  }
}