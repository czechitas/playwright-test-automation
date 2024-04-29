import { expect, type Locator, type Page } from "@playwright/test";

export class ApplicationActions {
  readonly page: Page;
  readonly locators: { [key: string]: Locator };

  constructor(page: Page) {
    this.page = page;

    this.locators = {};
  }

  async clickCreateNewApplicationButton() {
    await this.page.click(".card-header a");
  }

  async selectProgrammingSection() {
    await this.page.click(
      "//*[contains(text(), 'Programování')]//ancestor::*[@class='card']//a"
    );
  }

  async clickCreateApplicationButton() {
    await this.page.click(".card-body a");
  }

  async openFirstApplicationDetailsPage() {
    await this.page.click("//tr[1]//a[@title='Zobrazit']");
  }

  async search(searchText: string) {
    await this.page.fill("//input[@type='search']", searchText);
  }

  async clickEditFirstApplicationButton() {
    await this.page.click("//tr[1]//a[@title='Upravit']");
  }
}
