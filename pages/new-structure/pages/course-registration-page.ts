// Nova prihlaska 
import { expect, type Locator, type Page } from "@playwright/test";

export class CourseRegistrationPage {
  private page: Page;

  readonly termDropdown: Locator;
  readonly termFirstOption: Locator;
  readonly firstnameTextbox: Locator;
  readonly surnameTextbox: Locator;
  readonly birthdayTextbox: Locator;

  readonly bankTransferRadio: Locator;
  readonly postalOrderRadio: Locator;
  readonly fkspRadio: Locator;
  readonly cashRadio: Locator;
  readonly termsConditionsCheckbox: Locator;
  readonly createCourseRegistrationButton: Locator;
  readonly birthdayValidationMessage: Locator;
  readonly messageToast: Locator;
  
  constructor(page: Page) {
    this.page = page;
    this.termDropdown = this.page.locator("//button[@role='combobox']");
    this.termFirstOption = this.page.locator("a#bs-select-1-0");
    this.firstnameTextbox = this.page.locator("input#firstname");
    this.surnameTextbox = this.page.locator("input#surname");
    this.birthdayTextbox = this.page.locator("input#birthday");
    this.bankTransferRadio = this.page.getByText("Bankovní převod");
    this.postalOrderRadio = this.page.getByText("Složenka");
    this.fkspRadio = this.page.getByText("FKSP");
    this.cashRadio = this.page.getByText("Hotově");
    this.termsConditionsCheckbox = this.page.getByText("Souhlasím s všeobecnými podmínkami a zpracováním osobních údajů.");
    this.createCourseRegistrationButton = this.page.locator("input.btn");
    this.birthdayValidationMessage = this.page.locator("span.invalid-feedback", { hasText: "Žák musí dovršit 4 roky nejpozději v den začátku kurzu" });
    this.messageToast = this.page.locator("div.toast-message");
  }

  async clickTermDropdown() {
    await this.termDropdown.click();
  }

  async selectTermFirstOption() {
    await this.termFirstOption.click();
  }

  async fillFirstname(firstname: string) {
    await this.firstnameTextbox.fill(firstname);
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

  async createCourseRegistration(firstname: string, surname: string, birthday: string) {
    await this.clickTermDropdown();
    await this.selectTermFirstOption();
    await this.fillFirstname(firstname);
    await this.fillSurname(surname);
    await this.fillBirthday(birthday);
    await this.clickBankTransferRadio();
    await this.clickTermsConditionsCheckbox();
    await this.clickCreateCourseRegistrationButton();
  }

  async assertBirthdayValidationMessageIsVisible(): Promise<void> {
    await expect(this.birthdayValidationMessage).toBeVisible();
  }

  async assertMessageToastIsVisibleAndContainsError(): Promise<void> {
    await expect(this.messageToast).toBeVisible();
    await expect(this.messageToast).toHaveText("Některé pole obsahuje špatně zadanou hodnotu");
  }

  async assertMessageToastDisplaysSuccess(): Promise<void> {
    await expect(this.messageToast).toBeVisible();
    await expect(this.messageToast).toContainText("byl úspěšně vytvořen");
  }

}
