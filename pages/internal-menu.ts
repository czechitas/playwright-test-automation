import { type Page, type Locator } from "@playwright/test";

export class InternalMenu {
  readonly page: Page;
  readonly ordersSection: Locator;
  readonly termsSection: Locator;
  readonly applicationsSection: Locator;
  readonly categoriesSection: Locator;
  readonly newsSection: Locator;
  readonly exportsSection: Locator;

  constructor(page: Page) {
    this.page = page;
    this.ordersSection = page.locator("//*[@id='adminNavbar']//a[contains(text(), 'Objednávky')]");
    this.termsSection = page.locator("//*[@id='adminNavbar']//a[contains(text(), 'Termíny')]");
    this.applicationsSection = page.locator("//*[@id='adminNavbar']//a[contains(text(), 'Přihlášky')]");
    this.categoriesSection = page.locator("//*[@id='adminNavbar']//a[contains(text(), 'Kategorie')]");
    this.newsSection = page.locator("//*[@id='adminNavbar']//a[contains(text(), 'Aktuality')]");
    this.exportsSection = page.locator("//*[@id='adminNavbar']//a[contains(text(), 'Exporty')]");
  }

  async goToOrdersSection() {
    await this.ordersSection.click();
  }

  async goToTermsSection() {
    await this.termsSection.click();
  }

  async goToApplicationsSection() {
    await this.applicationsSection.click();
  }

  async goToCategoriesSection() {
    await this.categoriesSection.click();
  }

  async goToNewsSection() {
    await this.newsSection.click();
  }

  async goToExportsSection() {
    await this.exportsSection.click();
  }
}
