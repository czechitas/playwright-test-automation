import { test, expect } from "@playwright/test";
import { AllPages } from "../pages";

test.describe("Example test class for functionality showcase", () => {
  let pages: AllPages;

  test.beforeEach(async ({ page }) => {
    pages = new AllPages(page);

    await pages.visitPage();
  });

  test("When user navigates to Contacts section then user is navigated to czechitas url", async () => {
    await pages.headerMenu.goToContactsSection();

    const actualPageUrl = await pages.mainPage.pageUrl.textContent();
    const expectedPageUrl = "www.czechitas.cz";

    await expect(actualPageUrl).toBe(expectedPageUrl);
  });

  test("When valid creadentials provided then user is logged in", async () => {
    await pages.loginPage.clickLoginMenuLink();
    await pages.loginPage.insertEmail("da-app.admin@czechitas.cz");
    await pages.loginPage.insertPassword("Czechitas123");
    await pages.loginPage.clickLoginButton();
    await pages.loginPage.checkIsLoggedIn();
  });

  // Parameterized test - using test.describe for parameterization
  test.describe.parallel("icoFieldTest", () => {
    // List of test values
    const icos = ["123456789", "ASDFBVC", "123"];

    icos.forEach((icoValue) => {
      test(`testing ICO value: ${icoValue}`, async () => {
        await pages.headerMenu.goToKindergartenAndSchoolSection();
        await pages.orderPage.insertICO(icoValue);
        // Add any assertions or checks if necessary, assuming some validation or outcome needs to be verified
      });
    });
  });
});
