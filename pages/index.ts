import { Page } from "playwright";
import { PublicMenu } from "./public-menu";
import { ProfilePage } from "./profile-page";
import { OrderPage } from "./order-page";
import { LoginPage } from "./new-structure/pages/login-page";
import { InternalMenu } from "./internal-menu";
import { ApplicationsPage } from "./main-page";
import { ApplicationDetailPage } from "./aplication-detail-page";
import { RegistrationPage } from "./new-structure/pages/registration-page";

export class AllPages {
  public headerMenu: PublicMenu;
  public profilePage: ProfilePage;
  public orderPage: OrderPage;
  public loginPage: LoginPage;
  public internalMenu: InternalMenu;
  public applicationsPage: ApplicationsPage;
  public applicationDetailPage: ApplicationDetailPage;
  public registrationPage: RegistrationPage;
  private page: Page;

  constructor(page: Page) {
    this.page = page;
    this.headerMenu = new PublicMenu(page);
    this.profilePage = new ProfilePage(page);
    this.orderPage = new OrderPage(page);
    this.loginPage = new LoginPage(page);
    this.internalMenu = new InternalMenu(page);
    this.applicationsPage = new ApplicationsPage(page);
    this.applicationDetailPage = new ApplicationDetailPage(page);
    this.registrationPage = new RegistrationPage(page);
  }

  public async visitPage(): Promise<void> {
    await this.page.goto("/");
  }
}
