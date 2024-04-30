import { expect, type Locator, type Page } from "@playwright/test";

export class ApplicationDetailPage {
  readonly page: Page;
  readonly termSelectorButton: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly birthDateInput: Locator;
  readonly noteInput: Locator;
  readonly termsCheckbox: Locator;
  readonly createButton: Locator;
  readonly inCashPaymentRadio: Locator;
  readonly bankTransferPaymentButton: Locator;
  readonly editButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.termSelectorButton = page.locator("//button[@data-id='term_id']");
    this.firstNameInput = page.locator("//*[@id='forename']");
    this.lastNameInput = page.locator("//*[@id='surname']");
    this.birthDateInput = page.locator("//*[@id='birthday']");
    this.noteInput = page.locator("//*[@id='note']");
    this.termsCheckbox = page.locator("//label[@for='terms_conditions']");
    this.createButton = page.locator("//input[@type='submit']");
    this.inCashPaymentRadio = page.locator("//label[@for='payment_cash']");
    this.bankTransferPaymentButton = page.locator(
      "//label[@for='payment_transfer']"
    );
    this.editButton = page.locator("//input[@value='Upravit přihlášku']");
  }

  async selectTerm(term: string) {
    await this.termSelectorButton.click();
    await this.page.click(
      `//div[starts-with(@id,'bs-select')]//span[contains(text(), '${term}')]`
    );
  }

  async insertStudentFirstName(firstName: string) {
    await this.firstNameInput.fill(firstName);
  }

  async insertStudentLastName(lastName: string) {
    await this.lastNameInput.fill(lastName);
  }

  async insertBirthdate(birthdate: string) {
    await this.birthDateInput.fill(birthdate);
  }

  async insertNote(note: string) {
    await this.noteInput.fill(note);
  }

  async clickAcceptTermsCheckbox() {
    await this.termsCheckbox.click();
  }

  async clickCreateApplicationButton() {
    await this.createButton.click();
  }

  async selectCashPaymentMethod() {
    await this.inCashPaymentRadio.click();
  }

  async selectBankTransferPaymentMethod() {
    await this.bankTransferPaymentButton.click();
  }

  async clickEditApplicationButton() {
    await this.editButton.click();
  }
}
