import { type Page, type Locator } from "@playwright/test";

export class OrderPage {
  readonly page: Page;
  readonly suburbanCampTab: Locator;
  readonly schoolInNatureTab: Locator;
  readonly icoInput: Locator;
  readonly addressInput: Locator;
  readonly childrenCountInput: Locator;

  constructor(page: Page) {
    this.page = page;
    this.suburbanCampTab = page.locator('//*[@id="nav-home-tab"]');
    this.schoolInNatureTab = page.locator('//*[@id="nav-profile-tab"]');
    this.icoInput = page.locator('//*[@id="ico"]');
    this.addressInput = page.locator('//*[@id="address"]');
    this.childrenCountInput = page.locator('//*[@id="nature-students"]');
  }

  async selectSuburbanCampOption() {
    await this.suburbanCampTab.click();
  }

  async selectSchoolInNatureOption() {
    await this.schoolInNatureTab.click();
  }

  async insertICO(ico: string) {
    await this.icoInput.fill(ico);
    // Assuming that clicking the address field is required to trigger some UI update/validation.
    await this.addressInput.click();
  }

  async insertChildrenCount(childrenCount: number) {
    await this.childrenCountInput.fill(childrenCount.toString());
  }
}
