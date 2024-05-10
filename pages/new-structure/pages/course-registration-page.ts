// Nova prihlaska 
import { expect, type Locator, type Page } from "@playwright/test";

export class CourseRegistrationPage {
  private page: Page;

  readonly termDropdown: Locator;
  readonly termFirstOption: Locator;
  readonly forenameTextbox: Locator;
  readonly surnameTextbox: Locator;
  readonly birthdayTextbox: Locator;

  readonly bankTransferRadio: Locator;
  readonly postalOrderRadio: Locator;
  readonly fkspRadio: Locator;
  readonly cashRadio: Locator;
  readonly termsConditionsCheckbox: Locator;
  readonly createCourseRegistrationButton: Locator;
  
  constructor(page: Page) {
    this.page = page;
    this.termDropdown = this.page.locator("//button[@role='combobox']");
    this.termFirstOption = this.page.locator("a#bs-select-1-0");
    this.forenameTextbox = this.page.locator("input#forename");
    this.surnameTextbox = this.page.locator("input#surname");
    this.birthdayTextbox = this.page.locator("input#birthday");
    this.bankTransferRadio = this.page.getByText("Bankovní převod");
    this.postalOrderRadio = this.page.getByText("Složenka");
    this.fkspRadio = this.page.getByText("FKSP");
    this.cashRadio = this.page.getByText("Hotově");
    this.termsConditionsCheckbox = this.page.getByText("Souhlasím s všeobecnými podmínkami a zpracováním osobních údajů.");
    this.createCourseRegistrationButton = this.page.locator("input.btn");
  }

  async clickTermDropdown() {
    await this.termDropdown.click();
  }

  async selectTermFirstOption() {
    await this.termFirstOption.click();
  }

  async fillForename(forename: string) {
    await this.forenameTextbox.fill(forename);
  }

  async fillSurname(surname: string) {
    await this.surnameTextbox.fill(surname);
  }

  async fillBirthday(birthday: string) {
    await this.birthdayTextbox.fill(birthday);
  }

  async clickBankTransferRadio() {
    await this.bankTransferRadio.click();
  }

  async clickTermsConditionsCheckbox() {
    await this.termsConditionsCheckbox.click();
  }

  async clickCreateCourseRegistrationButton() {
    await this.createCourseRegistrationButton.click();
  }

}
