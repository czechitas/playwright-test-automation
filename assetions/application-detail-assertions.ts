import { Page, expect } from "@playwright/test";

export class ApplicationDetailAssertions {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
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
