import { type Page, type Locator } from "@playwright/test";

export class OrderPage {
  readonly page: Page;
  readonly locators: { [key: string]: Locator };

  constructor(page: Page) {
    this.page = page;
    this.locators = {
      suburbanCampTab: page.locator('//*[@id="nav-home-tab"]'),
      schoolInNatureTab: page.locator('//*[@id="nav-profile-tab"]'),
      icoInput: page.locator('//*[@id="ico"]'),
      addressInput: page.locator('//*[@id="address"]'),
      childrenCountInput: page.locator('//*[@id="nature-students"]'),
    };
  }

  async selectSuburbanCampOption() {
    await this.locators.suburbanCampTab.click();
  }

  async selectSchoolInNatureOption() {
    await this.locators.schoolInNatureTab.click();
  }

  async insertICO(ico: string) {
    await this.locators.icoInput.fill(ico);
    // Assuming that clicking the address field is required to trigger some UI update/validation.
    await this.locators.addressInput.click();
  }

  async insertChildrenCount(childrenCount: number) {
    await this.locators.childrenCountInput.fill(childrenCount.toString());
  }
}
