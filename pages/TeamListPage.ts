import { Page } from "@playwright/test";

export class TeamListPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  public async createNewTeam(): Promise<void> {
    await this.page.locator('button[value="team"]').click();
  }
}