import { type Page, type Locator } from "@playwright/test";

export class PublicMenu {
  readonly page: Page;
  readonly contactsSection: Locator;
  readonly forTeacherMenuItem: Locator;
  readonly instructionsFormsTeacher: Locator;
  readonly kindergartenSchoolOrder: Locator;
  readonly forParentMenuItem: Locator;
  readonly instructionsFormsParent: Locator;
  readonly createApplication: Locator;
  readonly homeSection: Locator;
  readonly applicationsSection: Locator;

  constructor(page: Page) {
    this.page = page;
    this.contactsSection = page.locator(
      "//div[@id='navbarSupportedContent']//a[contains(text(), 'Kontakt')]"
    );
    this.forTeacherMenuItem = page.locator(
      "//*[@id='navbarSupportedContent']//a[contains(text(), 'Pro učitelé')]"
    );
    this.instructionsFormsTeacher = page.locator(
      "//*[@id='navbarSupportedContent']//a[contains(text(), 'Pro učitelé')]//..//a[text()='Návody a formuláře']"
    );
    this.kindergartenSchoolOrder = page.locator(
      "//*[@id='navbarSupportedContent']//a[text()='Objednávka pro MŠ/ZŠ']"
    );
    this.forParentMenuItem = page.locator(
      "//*[@id='navbarSupportedContent']//a[contains(text(), 'Pro rodiče')]"
    );
    this.instructionsFormsParent = page.locator(
      "//*[@id='navbarSupportedContent']//a[contains(text(), 'Pro rodiče')]//..//a[text()='Návody a formuláře']"
    );
    this.createApplication = page.locator(
      "//*[@id='navbarSupportedContent']//a[text()='Vytvořit přihlášku']"
    );
    this.homeSection = page.locator(
      "//div[@id='navbarSupportedContent']//a[contains(text(), 'Domů')]"
    );
    this.applicationsSection = page.locator(
      "//*[@id='navbarSupportedContent']//a[contains(text(), 'Přihlášky')]"
    );
  }

  async goToContactsSection() {
    await this.contactsSection.click();
  }

  async goToInstructionsAndFormsForTeacherSection() {
    await this.clickForTeacherMenuItem();
    await this.instructionsFormsTeacher.click();
  }

  async goToKindergartenAndSchoolSection() {
    await this.clickForTeacherMenuItem();
    await this.kindergartenSchoolOrder.click();
  }

  async goToInstructionsAndFormsForParentSection() {
    await this.clickForParentMenuItem();
    await this.instructionsFormsParent.click();
  }

  async goToCreateApplicationSection() {
    await this.clickForParentMenuItem();
    await this.createApplication.click();
  }

  async goToHomePage() {
    await this.homeSection.click();
  }

  async goToApplicationsSection() {
    await this.applicationsSection.click();
  }

  private async clickForTeacherMenuItem() {
    await this.forTeacherMenuItem.click();
  }

  private async clickForParentMenuItem() {
    await this.forParentMenuItem.click();
  }
}
