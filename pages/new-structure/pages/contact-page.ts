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
    this.adressLine2 = this.card.getByRole("paragraph").nth(0);
    this.link = this.card.locator("a");
  }

  // ASSERTATIONS

  /**
   * Asserts that the header H1 element has the expected text.
   * @param expected - The expected text.
   */
  async expectHeaderH1HasTest(expected: string) {
    await expect(this.headerH1).toHaveText(expected);
  }

  /**
   * Asserts that the card title element has the expected text.
   * @param expected - The expected text.
   */
  async expectCardTitleHasText(expected: string) {
    await expect(this.cardTitle).toHaveText(expected);
  }

  /**
   * Asserts that the address line 1 element has the expected text.
   * @param expected - The expected text.
   */
  async expectAdressLineHasText(expected: string) {
    const text = await this.adressLine1.textContent();
    const lines = text?.split("<br>");
    await expect(lines?.[0]).toContain(expected);
  }

  /**
   * Asserts that the link element has the expected text.
   * @param expected - The expected text.
   */
  async expectLinkHasText(expected: string) {
    await expect(this.link).toHaveText(expected);
  }

  /**
   * Assert that link has correct href attribute.
   * @param expected - The expected href.
   */
  async expectLinkHref(expected: string) {
    await expect(this.link).toHaveAttribute("href", expected);
  }

  /**
   * Asserts that URL of page is correct
   * @param url - The expected url.
   */
  async expectCurrentUrl(url: string = "/kontakt") {
    await expect(this.page.url()).toContain(url);
  }

  // ACTIONS

  /**
   * Clicks on the link element.
   */
  async clickLink() {
    await this.link.click();
  }

  /**
   * Visits the contact page.
   */
  async visit() {
    await this.page.goto("/kontakt");
  }
}
