import { Page } from "@playwright/test";

export class HomePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  public async navigate(): Promise<void> {
    await this.page.goto('https://play.pokemonshowdown.com/');
  }

  public async openTeamBuilder(): Promise<void> {
    await this.page.getByRole('button', { name: 'Teambuilder' }).click();
  }
}