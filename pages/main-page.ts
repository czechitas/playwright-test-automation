import { type Locator, type Page } from "@playwright/test";

export class MainPage {
  readonly page: Page;
  readonly createNewApplicationButton: Locator;
  readonly programmingSection: Locator;
  readonly createApplicationButton: Locator;
  readonly firstApplicationDetailsPage: Locator;
  readonly searchInput: Locator;
  readonly editFirstApplicationButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.createNewApplicationButton = this.page.locator(".card-header a");
    this.programmingSection = this.page.locator(
      "//*[contains(text(), 'Programování')]//ancestor::*[@class='card']//a"
    );
    this.createApplicationButton = this.page.locator(".card-body a");
    this.firstApplicationDetailsPage = this.page.locator(
      "//tr[1]//a[@title='Zobrazit']"
    );
    this.searchInput = this.page.locator("//input[@type='search']");
    this.editFirstApplicationButton = this.page.locator(
      "//tr[1]//a[@title='Upravit']"
    );
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
}
