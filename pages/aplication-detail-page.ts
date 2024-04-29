import { expect, type Locator, type Page } from "@playwright/test";

export class ApplicationDetailPage {
  readonly page: Page;
  readonly locators: { [key: string]: Locator };

  constructor(page: Page) {
    this.page = page;
    this.locators = {
      termSelectorButton: page.locator("//button[@data-id='term_id']"),
      firstNameInput: page.locator("//*[@id='forename']"),
      lastNameInput: page.locator("//*[@id='surname']"),
      birthDateInput: page.locator("//*[@id='birthday']"),
      noteInput: page.locator("//*[@id='note']"),
      termsCheckbox: page.locator("//label[@for='terms_conditions']"),
      createButton: page.locator("//input[@type='submit']"),
      inCashPaymentRadio: page.locator("//label[@for='payment_cash']"),
      bankTransferPaymentButton: page.locator(
        "//label[@for='payment_transfer']"
      ),
      editButton: page.locator("//input[@value='Upravit přihlášku']"),
    };
  }

  async selectTerm(term: string) {
    await this.locators.termSelectorButton.click();
    await this.page.click(
      `//div[starts-with(@id,'bs-select')]//span[contains(text(), '${term}')]`
    );
  }

  async insertStudentFirstName(firstName: string) {
    await this.locators.firstNameInput.fill(firstName);
  }

  async insertStudentLastName(lastName: string) {
    await this.locators.lastNameInput.fill(lastName);
  }

  async insertBirthdate(birthdate: string) {
    await this.locators.birthDateInput.fill(birthdate);
  }

  async insertNote(note: string) {
    await this.locators.noteInput.fill(note);
  }

  async clickAcceptTermsCheckbox() {
    await this.locators.termsCheckbox.click();
  }

  async clickCreateApplicationButton() {
    await this.locators.createButton.click();
  }

  async selectCashPaymentMethod() {
    await this.locators.inCashPaymentRadio.click();
  }

  async selectBankTransferPaymentMethod() {
    await this.locators.bankTransferPaymentButton.click();
  }

  async clickEditApplicationButton() {
    await this.locators.editButton.click();
  }
}
