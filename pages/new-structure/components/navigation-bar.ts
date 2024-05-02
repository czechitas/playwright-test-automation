import { expect, type Locator, type Page } from "@playwright/test";

/**
 * Represents the navigation bar component.
 */
export class NavigationBar {
  readonly page: Page;
  /*
   * logo Czechitas, link to home page
   */
  readonly logo: Locator;
  // Domu
  readonly home: Locator;
  readonly forParents: Locator;
  readonly tutorialsForParents: Locator;
  readonly createRegistrationForParrent: Locator;

  readonly forTearchers: Locator;
  readonly tutorialsForTeachers: Locator;
  readonly createRegistrationForTeachers: Locator;

  readonly contact: Locator;
  readonly signInButton: Locator;

  readonly userIsLogged: Locator;
  readonly profileButton: Locator;
  readonly profileDropdownItem: Locator;
  readonly logoutDropdownItem: Locator;

  constructor(page: Page) {
    this.page = page;

    const nav = page.locator("nav");
    this.logo = nav.locator("a.navbar-brand");
    this.home = nav.locator("a.nav-link", { hasText: "Domů" });
    this.forParents = nav.locator("a.nav-link", { hasText: "Pro rodiče" });
    this.tutorialsForParents = nav.locator("a.dropdown-item", {
      hasText: "Návody a formuláře",
    });
    this.createRegistrationForParrent = nav.locator("a.dropdown-item", {
      hasText: "Vytvořit přihlášku",
    });

    // this is kinda typo? "Pro učitelé" instead of "Pro učitele"
    this.forTearchers = nav.locator("a.nav-link", { hasText: "Pro učitelé" });
    this.tutorialsForTeachers = nav.locator("a.dropdown-item", {
      hasText: "Návody a formuláře",
    });
    this.createRegistrationForTeachers = nav.locator("a.dropdown-item", {
      hasText: "Objednávka pro MŠ/ZŠ",
    });

    this.contact = nav.locator("a.nav-link", { hasText: "Kontakt" });
    this.signInButton = nav.locator("a.nav-link", { hasText: "Přihlásit" });

    // LOGGED
    this.userIsLogged = nav.locator("a.nav-item", { hasText: "Přihlášen" });
    this.profileButton = this.userIsLogged.locator("a");
    this.profileDropdownItem = nav.locator("a.dropdown-item", { hasText: "Profil" });
    this.logoutDropdownItem = nav.locator("a.dropdown-item", { hasText: "Odhlásit" });
  }

  /**
   * Clicks on the logo.
   */
  async clickLogo() {
    await this.logo.click();
  }

  /**
   * Clicks on the home link.
   */
  async clickHome() {
    await this.home.click();
  }

  /**
   * Clicks on the "For Parents" link.
   */
  async clickForParents() {
    await this.forParents.click();
  }

  /**
   * Clicks on the "Tutorials for Parents" link.
   */
  async clickTutorialsForParents() {
    await this.clickForParents();
    await this.tutorialsForParents.click();
  }

  /**
   * Clicks on the "Create Registration for Parents" link.
   */
  async clickCreateRegistrationForParrent() {
    await this.clickForParents();
    await this.createRegistrationForParrent.click();
  }

  /**
   * Clicks on the "For Teachers" link.
   */
  async clickForTeachers() {
    await this.forTearchers.click();
  }

  /**
   * Clicks on the "Tutorials for Teachers" link.
   */
  async clickTutorialsForTeachers() {
    await this.clickForTeachers();
    await this.tutorialsForTeachers.click();
  }

  /**
   * Clicks on the "Create Registration for Teachers" link.
   */
  async clickCreateRegistrationForTeachers() {
    await this.clickForTeachers();
    await this.createRegistrationForTeachers.click();
  }

  /**
   * Clicks on the contact link.
   */
  async clickContact() {
    await this.contact.click();
  }

  /**
   * Clicks on the sign-in button.
   */
  async clickSignIn() {
    await this.signInButton.click();
  }

  async clickOnProfileButton() {
    await this.profileButton.click();
  }

  /**
   * Logs out the user.
   */
  async logout() {
    await this.clickOnProfileButton();
    await this.logoutDropdownItem.click();
  }

  /**
   * Clicks on the profile dropdown item.
   */
  async clickOnProfile() {
    await this.clickOnProfileButton();
    await this.profileDropdownItem.click();
  }

  /// ASSERTATIONS

  /**
   * Asserts that the navigation bar is visible.
   */
  async expectNavBarIsVisible() {
    await expect(this.logo).toBeVisible();
    await expect(this.home).toBeVisible();
    await expect(this.forParents).toBeVisible();
    await expect(this.forTearchers).toBeVisible();
    await expect(this.contact).toBeVisible();
    await expect(this.signInButton).toBeVisible();
  }

  /**
   * Asserts that the dropdown menu for parents is visible.
   */
  async dropdownForParentsIsVisible() {
    await expect(this.tutorialsForParents).toBeVisible();
    await expect(this.createRegistrationForParrent).toBeVisible();
  }

  /**
   * Asserts that the dropdown menu for teachers is visible.
   */
  async dropdownForTeachersIsVisible() {
    await expect(this.tutorialsForTeachers).toBeVisible();
    await expect(this.createRegistrationForTeachers).toBeVisible();
  }

  /**
   * Asserts that the dropdown menu for parents is not visible.
   */
  async expectDropdownForParentsIsNotVisible() {
    await expect(this.tutorialsForParents).not.toBeVisible();
    await expect(this.createRegistrationForParrent).not.toBeVisible();
  }

  /**
   * Asserts that the dropdown menu for teachers is not visible.
   */
  async expectDropdownForTeachersIsNotVisible() {
    await expect(this.tutorialsForTeachers).not.toBeVisible();
    await expect(this.createRegistrationForTeachers).not.toBeVisible();
  }

  /**
   * Asserts that the user navigation is visible.
   */
  async expectUserNavIsVisible() {
    await expect(this.userIsLogged).toBeVisible();
  }

  /**
   * Asserts that the user navigation is not visible.
   */
  async expectUserIsLoggedNotVisible() {
    await expect(this.userIsLogged).not.toBeVisible();
  }

  /**
   * Asserts that the user is logged in.
   */
  async expectUserIsLogged() {
    await this.expectUserNavIsVisible();
  }

  async expectNameOfLoggedUserIsVisible(name: string) {
    await expect(this.profileButton).toHaveText(name);
  }
}
