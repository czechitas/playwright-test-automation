import { expect, type Locator, type Page } from "@playwright/test";

/**
 * Represents the navigation bar component.
 */
export class ContactPage {
  readonly page: Page;
  readonly headerH1: Locator;
  readonly card: Locator;
  readonly cardTitle: Locator;
  readonly adressLine1: Locator;
  readonly adressLine2: Locator;

  readonly link: Locator;

  constructor(page: Page) {
    this.page = page;

    const header = page.locator(".header_img");
    const content = page.locator("div.main_content");

    this.headerH1 = header.locator("h1");
    this.card = content.locator("div.card");
    this.cardTitle = this.card.locator("h3");
    this.adressLine1 = this.card.getByRole("paragraph").nth(0);
    this.adressLine2 = this.card.getByRole("paragraph").nth(1);
    this.link = this.card.locator("a");
  }

 // ASSERTATIONS

  async assertHeaderH1(expected: string) {
    await expect(this.headerH1).toHaveText(expected);
  }

  async assertCardTitle(expected: string) {
    await expect(this.cardTitle).toHaveText(expected);
  }

  async assertAdressLine1(expected: string) {
    await expect(this.adressLine1).toHaveText(expected);
  }

  async assertAdressLine2(expected: string) {
    await expect(this.adressLine2).toHaveText(expected);
  }

  async assertLink(expected: string) {
    await expect(this.link).toHaveText(expected);
  }

  // ACTIONS

  async clickLink() {
    await this.link.click();
  }
}
