import { Page, expect } from "@playwright/test";

export class ApplicationAssertions {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async checkColumnExists(columnName: string) {
    const columnText = await this.page.textContent(
      "//table[@id='DataTables_Table_0']/thead/tr"
    );
    expect(columnText).toContain(columnName);
  }

  async checkApplicationsTableIsEmpty() {
    const applicationsCountText = await this.page.textContent(
      "//*[@id='DataTables_Table_0_info']"
    );
    expect(applicationsCountText).toContain("Žádné záznamy nenalezeny");
  }

  async checkNumberOfApplications(applicationsNumber: number) {
    const applicationsCountText = await this.page.textContent(
      "//*[@id='DataTables_Table_0_info']"
    );
    const expectedText = `Zobrazeno ${applicationsNumber} až ${applicationsNumber} záznamů z ${applicationsNumber}`;
    expect(applicationsCountText).toContain(expectedText);
  }
}
