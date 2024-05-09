import { test, type Page } from "@playwright/test";
import { AllPages } from "../pages";

// Describe the test suite
// Muzes mit v souboru vice describe bloku, ale doporucuji mit jeden describe blok pro jeden soubor
// Describe blok je zde pro organizaci testu, ktere spolu souvisi
// V tomto pripade je zde jeden describe blok pro testovani nejake funkcionality
test.describe("Registrace", () => {
  let pages: AllPages;

  // Before each test, visit the page
  test.beforeEach(async ({ page }) => {
    pages = new AllPages(page);

    await pages.visitPage();
  });

  // Test case
  // V ramci describe bloku muzes mit vice testu
  // Test je zde pro jednotlivy testovaci pripad

  test.fixme(
    "prihlasim se nevalidnim emailem a ocekavam ze error toast ma spravny text",
    async () => {
      await pages.registrationPage.visit();
      await pages.registrationPage.fillName("Vojta");
      await pages.registrationPage.fillEmail("vojta123@czechitas.cz");
      await pages.registrationPage.fillPassword("Hello1234567");
      await pages.registrationPage.fillPasswordConfirmation("Hello1234567");

      await pages.registrationPage.submitButton.click();

      await pages.registrationPage.navigationBar.expectUserIsLogged();
    },
  );

  test("registruju se s validnim emailem a heslem, ktery v systemu je a ocekavam error message", async () => {
    await pages.registrationPage.visit();
    await pages.registrationPage.fillName("Vojta");
    await pages.registrationPage.fillEmail("vojta.cerve@czechitas.cz");
    await pages.registrationPage.fillPassword("Hello1234567");
    await pages.registrationPage.fillPasswordConfirmation("Hello1234567");

    await pages.registrationPage.submitButton.click();

    await pages.registrationPage.expectErrorFeedbackToHaveText(
      "Účet s tímto emailem již existuje",
    );
  });

  test("Zapomněli jste své heslo?", async ({ page }: { page: Page }) => {
    await pages.loginPage.visit();
    await pages.loginPage.forgotPasswordLink.click();
    await pages.loginPage.fillEmail("baru@yahoo.com");
    // await pages.loginPage.submitButton.click();
    await page.getByRole("button", { name: "Resetovat heslo" }).click();
  });
});
