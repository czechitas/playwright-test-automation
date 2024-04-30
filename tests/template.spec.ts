import { test } from "@playwright/test";
import { AllPages } from "../pages";

// Describe the test suite
// Muzes mit v souboru vice describe bloku, ale doporucuji mit jeden describe blok pro jeden soubor
// Describe blok je zde pro organizaci testu, ktere spolu souvisi
// V tomto pripade je zde jeden describe blok pro testovani nejake funkcionality
test.describe("Nazev features co testujes, nebo komponenty. Co testujes", () => {
  let pages: AllPages;

  // Before each test, visit the page
  test.beforeEach(async ({ page }) => {
    pages = new AllPages(page);

    await pages.visitPage();
  });

  // Test case
  // V ramci describe bloku muzes mit vice testu
  // Test je zde pro jednotlivy testovaci pripad
  test("jak to testujes", async () => {
    // Tady muzes mit kod, ktery provede nejake akce na strance
    // Napriklad kliknuti na nejaky element, napsani do inputu, atd.
    // Nezapomen na await, protoze vsechny akce jsou asynchronni a musis pockat na jejich dokonceni (javascript vec, neresime vic)
    // napr. await pages.headerMenu.goToContactsSection();

    
  });
});
