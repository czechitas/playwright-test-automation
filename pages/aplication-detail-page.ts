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

  async checkPaymentMethod(paymentMethod: string) {
    const paymentMethodText = await this.page.textContent(
      "//table/tbody//td[text()='Způsoby úhrady kurzu:']/..//strong"
    );
    expect(paymentMethodText).toBe(paymentMethod);
  }

  async checkFirstName(firstname: string) {
    const firstNameText = await this.page.textContent(
      "//table/tbody//td[text()='Křestní jméno žáka:']/../td[2]"
    );
    expect(firstNameText).toBe(firstname);
  }

  async checkLastName(lastname: string) {
    const lastNameText = await this.page.textContent(
      "//table/tbody//td[text()='Příjmení žáka:']/../td[2]"
    );
    expect(lastNameText).toBe(lastname);
  }

  async checkDateOfBirth(birthdate: string) {
    const birthDateText = await this.page.textContent(
      "//table/tbody//td[text()='Datum narození žáka:']/../td[2]"
    );
    expect(birthDateText).toBe(birthdate);
  }

  async checkNote(note: string) {
    const noteText = await this.page.textContent(
      "//table/tbody//td[text()='Poznámka:']/../td[2]"
    );
    expect(noteText).toBe(note);
  }

  async checkRemainingAmountToPay(paymentAmount: string) {
    const amountText = await this.page.textContent(
      "//table/tbody//td[text()='Zbývá uhradit']/..//strong"
    );
    expect(amountText).toBe(paymentAmount);
  }

  async checkMessageContainsStudentLastName(lastname: string) {
    const recipientMessageText = await this.page.textContent(
      "//table/tbody//td[text()='Zpráva pro příjemce']/../td[2]"
    );
    expect(recipientMessageText).toContain(lastname);
  }

  async checkTerm(term: string) {
    const termText = await this.page.textContent(".card-body h4");
    expect(termText).toContain(term);
  }
}
