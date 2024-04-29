import { Page } from "playwright";
import { PublicMenuPage } from "./public-menu-action";
import { ProfilePage } from "./profile-action";
import { OrderPage } from "./order-action";
import { LoginPage } from "./login-action";
import { InternalMenuPage } from "./internal-menu-action";
import { ApplicationActions } from "./application-actions";
import { ApplicationDetailPage } from "./aplication-detail-page";

export class AllPages {
  public headerMenu: PublicMenuPage;
  public profileSection: ProfilePage;
  public orderSection: OrderPage;
  public loginSection: LoginPage;
  public internalMenu: InternalMenuPage;
  public applicationSection: ApplicationActions;
  public applicationDetailSection: ApplicationDetailPage;
  private page: Page;

  constructor(page: Page) {
    this.page = page;
    this.headerMenu = new PublicMenuPage(page);
    this.profileSection = new ProfilePage(page);
    this.orderSection = new OrderPage(page);
    this.loginSection = new LoginPage(page);
    this.internalMenu = new InternalMenuPage(page);
    this.applicationSection = new ApplicationActions(page);
    this.applicationDetailSection = new ApplicationDetailPage(page);
  }

  public async visitPage(url?: string): Promise<void> {
    await this.page.goto(url || "https://datoj24.czechhackitas.cz/");
  }
}
