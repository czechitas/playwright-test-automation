import { type Page, type Locator } from "@playwright/test";

export class InternalMenuPage {
  readonly page: Page;
  readonly locators: { [key: string]: Locator };

  constructor(page: Page) {
    this.page = page;
    this.locators = {
      ordersSection: page.locator(
        "//*[@id='adminNavbar']//a[contains(text(), 'Objednávky')]"
      ),
      termsSection: page.locator(
        "//*[@id='adminNavbar']//a[contains(text(), 'Termíny')]"
      ),
      applicationsSection: page.locator(
        "//*[@id='adminNavbar']//a[contains(text(), 'Přihlášky')]"
      ),
      categoriesSection: page.locator(
        "//*[@id='adminNavbar']//a[contains(text(), 'Kategorie')]"
      ),
      newsSection: page.locator(
        "//*[@id='adminNavbar']//a[contains(text(), 'Aktuality')]"
      ),
      exportsSection: page.locator(
        "//*[@id='adminNavbar']//a[contains(text(), 'Exporty')]"
      ),
    };
  }

  async goToOrdersSection() {
    await this.locators.ordersSection.click();
  }

  async goToTermsSection() {
    await this.locators.termsSection.click();
  }

  async goToApplicationsSection() {
    await this.locators.applicationsSection.click();
  }

  async goToCategoriesSection() {
    await this.locators.categoriesSection.click();
  }

  async goToNewsSection() {
    await this.locators.newsSection.click();
  }

  async goToExportsSection() {
    await this.locators.exportsSection.click();
  }
}
