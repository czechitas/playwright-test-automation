import { expect, type Locator, type Page } from "@playwright/test";
import { NavigationBar } from "../components/navigation-bar";

/**
 * Represents the Contact Page of the website.
 */
export class ContactPage {
  readonly page: Page;
  readonly navigationBar: NavigationBar;

  readonly headerH1: Locator;
  readonly card: Locator;
  readonly cardTitle: Locator;
  readonly adressLine1: Locator;
  readonly adressLine2: Locator;

  readonly link: Locator;

  constructor(page: Page) {
    this.page = page;
    this.navigationBar = new NavigationBar(page);

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

  /**
   * Asserts that the header H1 element has the expected text.
   * @param expected - The expected text.
   */
  async assertHeaderH1(expected: string) {
    await expect(this.headerH1).toHaveText(expected);
  }

  /**
   * Asserts that the card title element has the expected text.
   * @param expected - The expected text.
   */
  async assertCardTitle(expected: string) {
    await expect(this.cardTitle).toHaveText(expected);
  }

  /**
   * Asserts that the address line 1 element has the expected text.
   * @param expected - The expected text.
   */
  async assertAdressLine1(expected: string) {
    await expect(this.adressLine1).toHaveText(expected);
  }

  /**
   * Asserts that the address line 2 element has the expected text.
   * @param expected - The expected text.
   */
  async assertAdressLine2(expected: string) {
    await expect(this.adressLine2).toHaveText(expected);
  }

  /**
   * Asserts that the link element has the expected text.
   * @param expected - The expected text.
   */
  async assertLink(expected: string) {
    await expect(this.link).toHaveText(expected);
  }

  /**
   * Assert that link has correct href attribute.
   * @param expected - The expected href.
   */
  async assertLinkHref(expected: string) {
    await expect(this.link).toHaveAttribute("href", expected);
  }

  // ACTIONS

  /**
   * Clicks on the link element.
   */
  async clickLink() {
    await this.link.click();
  }
}
