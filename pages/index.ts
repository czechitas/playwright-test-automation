import { Page } from "playwright";
import { PublicMenu } from "./public-menu";
import { ProfilePage } from "./profile-page";
import { OrderPage } from "./order-page";
import { LoginPage } from "./login-page";
import { InternalMenu } from "./internal-menu";
import { MainPage } from "./main-page";
import { ApplicationDetailPage } from "./aplication-detail-page";

export class AllPages {
  public headerMenu: PublicMenu;
  public profilePage: ProfilePage;
  public orderPage: OrderPage;
  public loginPage: LoginPage;
  public internalMenu: InternalMenu;
  public mainPage: MainPage;
  public applicationDetailPage: ApplicationDetailPage;
  private page: Page;

  constructor(page: Page) {
    this.page = page;
    this.headerMenu = new PublicMenu(page);
    this.profilePage = new ProfilePage(page);
    this.orderPage = new OrderPage(page);
    this.loginPage = new LoginPage(page);
    this.internalMenu = new InternalMenu(page);
    this.mainPage = new MainPage(page);
    this.applicationDetailPage = new ApplicationDetailPage(page);
  }

  public async visitPage(url?: string): Promise<void> {
    await this.page.goto(url || "https://datoj24.czechhackitas.cz/");
  }
}
