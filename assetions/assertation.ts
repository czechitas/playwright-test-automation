import { expect, Page } from "@playwright/test";
import { ApplicationAssertions } from "./application-assertions";
import { ApplicationDetailAssertions } from "./application-detail-assertions";

export class Assertions {
  private page: Page;
  public applicationSection: ApplicationAssertions;
  public applicationDetailAction: ApplicationDetailAssertions;

  // Property locators with explicit types
  private locators: {
    pageUrl: string;
    loggedInText: string;
    programmingSection: string;
    registrationButton: string;
  } = {
    pageUrl: "//a[text()='www.czechitas.cz']",
    loggedInText: ".navbar-right span",
    programmingSection: ".main_content .card-img-overlay",
    registrationButton: ".btn-secondary",
  };

  constructor(page: Page) {
    this.page = page;
    this.applicationSection = new ApplicationAssertions(page);
    this.applicationDetailAction = new ApplicationDetailAssertions(page);
  }

  async checkPageUrl(url: string): Promise<void> {
    const urlText = await this.page.textContent(this.locators.pageUrl);
    expect(urlText).toBe(url);
  }

  async checkIsLoggedIn(): Promise<void> {
    const loggedInText = await this.page.textContent(
      this.locators.loggedInText
    );
    expect(loggedInText).toBe("Přihlášen");
  }

  async checkProgrammingSectionPresence(): Promise<void> {
    const programmingText = await this.page.textContent(
      this.locators.programmingSection
    );
    if (!programmingText) {
      throw new Error("Programming section not found");
    }
    expect(programmingText.trim()).toBe("Programování");
  }

  async checkRegistrationButtonPresence(): Promise<void> {
    const registrationButtonText = await this.page.textContent(
      this.locators.registrationButton
    );
    if (!registrationButtonText) {
      throw new Error("Registration button not found");
    }
    expect(registrationButtonText.trim()).toBe("Zaregistrujte se");
  }
}
