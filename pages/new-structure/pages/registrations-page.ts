import { Locator, Page } from "playwright";
import { NavigationBar } from "../components/navigation-bar";
import { expect } from "playwright/test";

type SelectOptions = 15 | 30 | 60 | 100;

/**
 * Represents the Registrations Page.
 */
export class RegistrationsPage {
  readonly page: Page;
  readonly navigationBar: NavigationBar;

  readonly createNewRegistrationButton: Locator;
  readonly searchInput: Locator;
  readonly countToView: Locator;

  readonly tableIsEmpty: Locator;

  readonly tableRows: Locator;
  readonly registrationsInfoText: Locator;
  /**
   * Constructs a new instance of the RegistrationsPage class.
   * @param page The Playwright Page object.
   */
  constructor(page: Page) {
    this.page = page;
    this.navigationBar = new NavigationBar(page);

    this.createNewRegistrationButton = page.locator("link", {
      hasText: "Vytvořit novou přihlášku",
    });
    this.searchInput = page.getByLabel("Hledat");

    this.countToView = page.getByLabel("Zobraz 153060100 záznamů");

    this.tableIsEmpty = page.locator("div.dataTables_empty");
    this.tableRows = page.locator("table tbody tr");
    this.registrationsInfoText = page.locator("div#DataTables_Table_0_info");
  }

  /**
   * Navigates to the Registrations Page.
   */
  async visit() {
    await this.page.goto("/zaci");
  }

  /**
   * Creates a new registration.
   */
  async clickToCreateNewRegistration() {
    await this.createNewRegistrationButton.click();
  }

  /**
   * Performs a search on the Registrations Page.
   * @param search The search query.
   */
  async search(search: string) {
    await this.searchInput.fill(search);
  }

  /**
   * Selects the number of records to view on the Registrations Page.
   * @param count The number of records to view.
   */
  async selectCountToView(count: SelectOptions) {
    await this.countToView.selectOption(count.toString());
  }

  /**
   * Expects the table on the Registrations Page to be empty.
   */
  async expectTableIsEmpty() {
    await expect(this.tableIsEmpty).toBeVisible();
  }

  /**
   * Expects the table on the Registrations Page to not be empty.
   */
  async expectTableIsNotEmpty() {
    await expect(this.tableIsEmpty).toBeHidden();
  }

  /**
   * Expects the table on the Registrations Page to be empty and have the specified text.
   * @param expected The expected text.
   */
  async expectTableIsEmptyHaveText(expected: string) {
    await expect(this.tableIsEmpty).toHaveText(expected);
  }

  /**
   * Expects the selected count on the Registrations Page to have the specified value.
   * @param expected The expected value.
   */
  async expectSelectedCountToHaveSelectedValue(expected: SelectOptions) {
    await expect(this.countToView).toHaveValue(expected.toString());
  }

  /**
   * Expects the table on the Registrations Page to have the specified number of rows.
   * @param expected The expected number of rows.
   */
  async expectTableToHaveRows(expected: number) {
    await expect(this.tableRows).toHaveCount(expected);
  }

  /**
   * Gets the count of registrations.
   * @returns The count of registrations.
   */
  async getCountOfRegistrations() {
    // Implementation goes here
  }

  /**
   * Extracts all numbers from a string.
   * @param text The input string.
   * @returns An array of numbers extracted from the string.
   * @private
   */
  private extractAllNumbersFromString(text: string): number[] {
    const matches = text.match(/\d+/g);
    return matches ? matches.map(Number) : [];
  }

  async getCurrentNumberOfRegistrations() {
    const infoText = await this.registrationsInfoText.innerText()
    return this.extractAllNumbersFromString(infoText)[2]
  }

  async expectCurrentNumberOfRegistrations(expected: number) {
    const current = await this.getCurrentNumberOfRegistrations()
    await expect(current).toBe(expected)
  }

  
}
