import { test, expect } from "@playwright/test";
import { AllPages } from "../pages";

test.describe("Example test class for functionality showcase", () => {
  let pages: AllPages;

  test.beforeEach(async ({ page }) => {
    pages = new AllPages(page);

    await pages.visitPage();
  });

  test("successfulLoginTest", async () => {
    await pages.loginPage.visit();
    await pages.loginPage.login("vojta.cerveny@czechitas.cz", "Hello123456");
    await pages.loginPage.navigationBar.expectUserIsLogged();
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
