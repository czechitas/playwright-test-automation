import { expect, test } from "@playwright/test";

test.describe("Ukazkova test suita ve ktere najdes par zakladnich testu", () => {
  let validLoginUsername = process.env.VALID_LOGIN_USERNAME as string;
  let validLoginPassword = process.env.VALID_LOGIN_PASSWORD as string;

  test.beforeEach(async ({ page }) => {
    
  });

  test("Prihlaseni existujiciho uzivatele", async ({ page }) => {
    // given
    await page.goto("/prihlaseni");

    // when
    await page.locator("input#email").fill(validLoginUsername);
    await page.locator("input#password").fill(validLoginPassword);
    await page.locator("button", { hasText: "Přihlásit" }).click();

    // then
    await expect(page.locator("nav").locator("div.nav-item", { hasText: "Přihlášen" })).toBeVisible();
  });

  test("Vytvoreni prihlasky", async ({ page }) => {
    // given
    await page.goto("/prihlaseni");    
    await page.locator("input#email").fill(validLoginUsername);
    await page.locator("input#password").fill(validLoginPassword);
    await page.locator("button", { hasText: "Přihlásit" }).click();

    // when
    await page.locator(".card-header a").click();
    await page.locator(".card-body a").click();
    await page.locator("div.card-body.d-flex.flex-column.justify-content-between").locator("//a[@href='https://datoj24.czechhackitas.cz/zaci/pridat/139-python']").click();

    await page.locator("//button[@role='combobox']").click();
    await page.locator("a#bs-select-1-0").click();
    
    await page.locator("input#forename").fill("Pepíček");
    await page.locator("input#surname").fill("Malíček");
    await page.locator("input#birthday").fill("12.12.2012");
    
    await page.getByText("Bankovní převod").click();
    await page.getByText("Souhlasím s všeobecnými podmínkami a zpracováním osobních údajů.").click();
    await page.locator("input.btn").click();
        
    // then
    await expect(page.locator("div.toast-message", { hasText: "vytvořen" })).toBeVisible();
  });

  test("Vytvoreni prihlasky s jeste nenarozenym ditetem", async ({ page }) => {
    // given
    await page.goto("/prihlaseni");    
    await page.locator("input#email").fill(validLoginUsername);
    await page.locator("input#password").fill(validLoginPassword);
    await page.locator("button", { hasText: "Přihlásit" }).click();

    // when
    await page.locator(".card-header a").click();
    await page.locator(".card-body a").click();
    await page.locator("div.card-body.d-flex.flex-column.justify-content-between").locator("//a[@href='https://datoj24.czechhackitas.cz/zaci/pridat/139-python']").click();

    await page.locator("//button[@role='combobox']").click();
    await page.locator("a#bs-select-1-0").click();
    
    await page.locator("input#forename").fill("Pepíček");
    await page.locator("input#surname").fill("Malíček");
    await page.locator("input#birthday").fill("12.12.2032");
    
    await page.getByText("Bankovní převod").click();
    await page.getByText("Souhlasím s všeobecnými podmínkami a zpracováním osobních údajů.").click();
    await page.locator("input.btn").click();
        
    // then
    await expect(page.locator("div.toast-message", { hasText: "Některé pole obsahuje špatně zadanou hodnotu" })).toBeVisible();
    await expect(page.locator("span.invalid-feedback", { hasText: "Žák musí dovršit 4 roky nejpozději v den začátku kurzu" })).toBeVisible();
  });

  test("Vytvoreni prihlasky s prilis mladym ditetem", async ({ page }) => {
    // given
    await page.goto("/prihlaseni");    
    await page.locator("input#email").fill(validLoginUsername);
    await page.locator("input#password").fill(validLoginPassword);
    await page.locator("button", { hasText: "Přihlásit" }).click();

    // when
    await page.locator(".card-header a").click();
    await page.locator(".card-body a").click();
    await page.locator("div.card-body.d-flex.flex-column.justify-content-between").locator("//a[@href='https://datoj24.czechhackitas.cz/zaci/pridat/139-python']").click();

    await page.locator("//button[@role='combobox']").click();
    await page.locator("a#bs-select-1-0").click();
    
    await page.locator("input#forename").fill("Pepíček");
    await page.locator("input#surname").fill("Malíček");
    await page.locator("input#birthday").fill("12.12.2020");
    
    await page.getByText("Bankovní převod").click();
    await page.getByText("Souhlasím s všeobecnými podmínkami a zpracováním osobních údajů.").click();
    await page.locator("input.btn").click();
        
    // then
    await expect(page.locator("div.toast-message", { hasText: "Některé pole obsahuje špatně zadanou hodnotu" })).toBeVisible();
    await expect(page.locator("span.invalid-feedback", { hasText: "Žák musí dovršit 4 roky nejpozději v den začátku kurzu" })).toBeVisible();
  });

});
