import { test } from "@playwright/test";
import { AllPages } from "../pages";

// Describe the test suite
// Muzes mit v souboru vice describe bloku, ale doporucuji mit jeden describe blok pro jeden soubor
// Describe blok je zde pro organizaci testu, ktere spolu souvisi
// V tomto pripade je zde jeden describe blok pro testovani nejake funkcionality
test.describe("Prihlasovani", () => {
  let pages: AllPages;

  // Before each test, visit the page
  test.beforeEach(async ({ page }) => {
    pages = new AllPages(page);

    await pages.visitPage();
  });

  // Test case
  // V ramci describe bloku muzes mit vice testu
  // Test je zde pro jednotlivy testovaci pripad
  test("prihlasim se validnim emailem a heslem", async () => {
    await pages.loginPage.visit();
    await pages.loginPage.fillEmail("vojta.cerveny@czechitas.cz");
    await pages.loginPage.fillPassword("Hello123456");
    await pages.loginPage.submitButton.click();

    await pages.loginPage.navigationBar.expectUserIsLogged();
  });

  test("prihlasim se nevalidnim emailem a ocekavam cerveny ramecek", async () => {
    await pages.loginPage.visit();
    await pages.loginPage.fillEmail("blablablamnauhafzblunk@czechitas.cz");
    await pages.loginPage.fillPassword("Hello123456");
    await pages.loginPage.submitButton.click();

    await pages.loginPage.expectWarningAroundEmailInput();
  });

  test("prihlasim se nevalidnim emailem a ocekavam spravnou errorovou hlasku", async () => {
    await pages.loginPage.visit();
    await pages.loginPage.fillEmail("blablablamnauhafzblunk@czechitas.cz");
    await pages.loginPage.fillPassword("Hello123456");
    await pages.loginPage.submitButton.click();

    await pages.loginPage.expectErrorFeedbackToHaveText(
      "Tyto přihlašovací údaje neodpovídají žadnému záznamu.",
    );
  });

  test("prihlasim se nevalidnim emailem a ocekavam ze error hlaska je visible", async () => {
    await pages.loginPage.visit();
    await pages.loginPage.fillEmail("blablablamnauhafzblunk@czechitas.cz");
    await pages.loginPage.fillPassword("Hello123456");
    await pages.loginPage.submitButton.click();

    await pages.loginPage.expectErrorFeedbackIsVisible();
  });

  test("prihlasim se nevalidnim emailem a ocekavam ze error toast je visible", async () => {
    await pages.loginPage.visit();
    await pages.loginPage.fillEmail("blablablamnauhafzblunk@czechitas.cz");
    await pages.loginPage.fillPassword("Hello123456");
    await pages.loginPage.submitButton.click();

    await pages.loginPage.expectErrorToastIsVisible();
  });

  test("prihlasim se nevalidnim emailem a ocekavam ze error toast ma spravny text", async () => {
    await pages.loginPage.visit();
    await pages.loginPage.fillEmail("blablablamnauhafzblunk@czechitas.cz");
    await pages.loginPage.fillPassword("Hello123456");
    await pages.loginPage.submitButton.click();

    await pages.loginPage.expectErrorToastToHaveText(
      "×Špatně zadané poleNěkteré pole obsahuje špatně zadanou hodnotu",
    );
  });
});
