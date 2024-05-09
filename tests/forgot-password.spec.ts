import { test } from "@playwright/test";
import { AllPages } from "../pages";

test.describe("Forgot password page", () => {
  let pages: AllPages;

  // Before each test, visit the page
  test.beforeEach(async ({ page }) => {
    pages = new AllPages(page);

    await pages.forgotPasswordPage.visit();
  });

  test("nejaky popis toho, jak testujes ", async () => {

    
  });
});
