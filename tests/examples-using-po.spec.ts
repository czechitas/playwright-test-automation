import { expect, test } from "@playwright/test";
import { AllPages } from "../pages";

// pouzij only aby se pustily pouze testy v teto test suite
test.describe("Ukazkova test suita ve ktere najdes par zakladnich testu", () => {
  let pages: AllPages;
  let validLoginUsername = process.env.VALID_LOGIN_USERNAME as string;
  let validLoginPassword = process.env.VALID_LOGIN_PASSWORD as string;

  test.beforeEach(async ({ page }) => {
    pages = new AllPages(page);

    await pages.visitPage();
  });

  test("Prihlaseni existujiciho uzivatele", async () => {
    // given
    await pages.loginPage.visit();

    // when
    await pages.loginPage.login(validLoginUsername, validLoginPassword);

    // then
    await pages.loginPage.navigationBar.expectUserIsLogged();
  });

  test("Vytvoreni prihlasky", async () => {
    // given
    await pages.loginPage.visit();
    await pages.loginPage.login(validLoginUsername, validLoginPassword);

    // when
    await pages.applicationsPage.createPythonCourseRegistration();
    await pages.courseRegistrationPage.createCourseRegistration("Pepíček", "Malíček", "12.12.2012");
        
    // then
    await pages.courseRegistrationPage.assertMessageToastDisplaysSuccess();
  });

  test("Vytvoreni prihlasky s jeste nenarozenym ditetem", async () => {
    // given
    await pages.loginPage.visit();
    await pages.loginPage.login(validLoginUsername, validLoginPassword);

    // when
    await pages.applicationsPage.createPythonCourseRegistration();
    await pages.courseRegistrationPage.createCourseRegistration("Pepíček", "Malíček", "12.12.2032");
        
    // then
    await pages.courseRegistrationPage.assertMessageToastIsVisibleAndContainsError();
    await pages.courseRegistrationPage.assertBirthdayValidationMessageIsVisible();
  });

  test("Vytvoreni prihlasky s prilis mladym ditetem", async () => {
    // given
    await pages.loginPage.visit();
    await pages.loginPage.login(validLoginUsername, validLoginPassword);

    // when
    await pages.applicationsPage.createPythonCourseRegistration();
    await pages.courseRegistrationPage.createCourseRegistration("Pepíček", "Malíček", "12.12.2020");
        
    // then
    await pages.courseRegistrationPage.assertMessageToastIsVisibleAndContainsError();
    await pages.courseRegistrationPage.assertBirthdayValidationMessageIsVisible();
  });

});
