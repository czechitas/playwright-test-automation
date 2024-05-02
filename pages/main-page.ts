import { expect, type Locator, type Page } from "@playwright/test";

export class MainPage {
  private page: Page;

  readonly createNewApplicationButton: Locator;
  readonly programmingSection: Locator;
  readonly createApplicationButton: Locator;
  readonly firstApplicationDetailsPage: Locator;
  readonly searchInput: Locator;
  readonly editFirstApplicationButton: Locator;
  readonly pageUrl: Locator;
  private registrationButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.createNewApplicationButton = this.page.locator(".card-header a");
    this.programmingSection = this.page.locator(
      "//*[contains(text(), 'Programování')]//ancestor::*[@class='card']//a",
    );
    this.createApplicationButton = this.page.locator(".card-body a");
    this.firstApplicationDetailsPage = this.page.locator(
      "//tr[1]//a[@title='Zobrazit']",
    );
    this.searchInput = this.page.locator("//input[@type='search']");
    this.editFirstApplicationButton = this.page.locator(
      "//tr[1]//a[@title='Upravit']",
    );
    this.registrationButton = this.page.locator(".btn-secondary");
    this.pageUrl = this.page
      .locator(".main_content")
      .locator("//a[text()='www.czechitas.cz']");
  }

  async clickCreateNewApplicationButton() {
    await this.createNewApplicationButton.click();
  }

  async selectProgrammingSection() {
    await this.programmingSection.click();
  }

  async clickCreateApplicationButton() {
    await this.createApplicationButton.click();
  }

  async openFirstApplicationDetailsPage() {
    await this.firstApplicationDetailsPage.click();
  }

  async search(searchText: string) {
    await this.searchInput.fill(searchText);
  }

  async clickEditFirstApplicationButton() {
    await this.editFirstApplicationButton.click();
  }

  async checkColumnExists(columnName: string) {
    const columnText = await this.page.textContent(
      "//table[@id='DataTables_Table_0']/thead/tr",
    );
    expect(columnText).toContain(columnName);
  }

  async checkApplicationsTableIsEmpty() {
    const applicationsCountText = await this.page.textContent(
      "//*[@id='DataTables_Table_0_info']",
    );
    expect(applicationsCountText).toContain("Žádné záznamy nenalezeny");
  }

  async checkNumberOfApplications(applicationsNumber: number) {
    const applicationsCountText = await this.page.textContent(
      "//*[@id='DataTables_Table_0_info']",
    );
    const expectedText = `Zobrazeno ${applicationsNumber} až ${applicationsNumber} záznamů z ${applicationsNumber}`;
    expect(applicationsCountText).toContain(expectedText);
  }

  async checkPageUrl(url: string): Promise<void> {
    const urlText = await this.pageUrl.textContent();
    expect(urlText).toBe(url);
  }

  async checkProgrammingSectionPresence(): Promise<void> {
    const programmingText = await this.programmingSection.textContent();
    if (!programmingText) {
      throw new Error("Programming section not found");
    }
    expect(programmingText.trim()).toBe("Programování");
  }

  async checkRegistrationButtonPresence(): Promise<void> {
    const registrationButtonText = await this.registrationButton.textContent();
    if (!registrationButtonText) {
      throw new Error("Registration button not found");
    }
    expect(registrationButtonText.trim()).toBe("Zaregistrujte se");
  }
}
