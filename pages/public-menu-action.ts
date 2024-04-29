import { type Page, type Locator } from '@playwright/test';

export class PublicMenuPage {
    readonly page: Page;
    readonly locators: { [key: string]: Locator };

    constructor(page: Page) {
        this.page = page;
        this.locators = {
            contactsSection: page.locator("//div[@id='navbarSupportedContent']//a[contains(text(), 'Kontakt')]"),
            forTeacherMenuItem: page.locator("//*[@id='navbarSupportedContent']//a[contains(text(), 'Pro učitelé')]"),
            instructionsFormsTeacher: page.locator("//*[@id='navbarSupportedContent']//a[contains(text(), 'Pro učitelé')]//..//a[text()='Návody a formuláře']"),
            kindergartenSchoolOrder: page.locator("//*[@id='navbarSupportedContent']//a[text()='Objednávka pro MŠ/ZŠ']"),
            forParentMenuItem: page.locator("//*[@id='navbarSupportedContent']//a[contains(text(), 'Pro rodiče')]"),
            instructionsFormsParent: page.locator("//*[@id='navbarSupportedContent']//a[contains(text(), 'Pro rodiče')]//..//a[text()='Návody a formuláře']"),
            createApplication: page.locator("//*[@id='navbarSupportedContent']//a[text()='Vytvořit přihlášku']"),
            homeSection: page.locator("//div[@id='navbarSupportedContent']//a[contains(text(), 'Domů')]"),
            applicationsSection: page.locator("//*[@id='navbarSupportedContent']//a[contains(text(), 'Přihlášky')]")
        };
    }

    async goToContactsSection() {
        await this.locators.contactsSection.click();
    }

    async goToInstructionsAndFormsForTeacherSection() {
        await this.clickForTeacherMenuItem();
        await this.locators.instructionsFormsTeacher.click();
    }

    async goToKindergartenAndSchoolSection() {
        await this.clickForTeacherMenuItem();
        await this.locators.kindergartenSchoolOrder.click();
    }

    async goToInstructionsAndFormsForParentSection() {
        await this.clickForParentMenuItem();
        await this.locators.instructionsFormsParent.click();
    }

    async goToCreateApplicationSection() {
        await this.clickForParentMenuItem();
        await this.locators.createApplication.click();
    }

    async goToHomePage() {
        await this.locators.homeSection.click();
    }

    async goToApplicationsSection() {
        await this.locators.applicationsSection.click();
    }

    private async clickForTeacherMenuItem() {
        await this.locators.forTeacherMenuItem.click();
    }

    private async clickForParentMenuItem() {
        await this.locators.forParentMenuItem.click();
    }
}
