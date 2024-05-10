import { expect, test } from "@playwright/test";
import { AllPages } from "../pages";
import { UserApi, createRandomUsername } from "../api-helpers/user-api";

test.describe("Ukazkova test suita ve ktere najdes ruzne zpusoby jak a co je mozne v appce testovat", () => {
  let pages: AllPages;
  let validLoginUsername = process.env.VALID_LOGIN_USERNAME as string;
  let validLoginPassword = process.env.VALID_LOGIN_PASSWORD as string;

  test.beforeEach(async ({ page }) => {
    pages = new AllPages(page);

    await pages.visitPage();
  });

  test("Login of an existing user is successful", async () => {
    await pages.loginPage.visit();
    await pages.loginPage.login(validLoginUsername, validLoginPassword);
    await pages.loginPage.navigationBar.expectUserIsLogged();
  });

  test("Register new user via API", async ({ page }) => {
    // given
    const userApi = new UserApi(page);
    const username = createRandomUsername(3);
    const password = createRandomUsername(6);

    // when
    const response = await userApi.registerUser(username, password);    
    
    // then
    expect(response.status()).toBe(201);
  });

  // Parameterized test - using test.describe for parameterization
  test.describe.parallel("icoFieldTest", () => {
    // List of test values
    const icos = [
      "123456789", 
      "ASDFBVC", 
      "123"
    ];

    icos.forEach((icoValue) => {
      test(`testing ICO value: ${icoValue}`, async () => {
        await pages.headerMenu.goToKindergartenAndSchoolSection();
        await pages.orderPage.insertICO(icoValue);
        // Add any assertions or checks if necessary, assuming some validation or outcome needs to be verified
      });
    });
    
  });

});
