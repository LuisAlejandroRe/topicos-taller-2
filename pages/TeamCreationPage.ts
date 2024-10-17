import { expect, Page } from "@playwright/test";

export class TeamCreationPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  public async selectFormat(format: string, gen: string): Promise<void> {
    const searchFormatInput = this.page.getByPlaceholder("Search formats");
    await searchFormatInput.click();
    await searchFormatInput.pressSequentially(format);
    await this.page
      .locator(`button[value="gen${gen}${format.toLowerCase()}"]`)
      .click();
  }

  public async goToSelectFormat(): Promise<void> {
    await this.page.locator('//button[contains(.,"Select a format")]').click();
  }

  public async goToPokemonCreation(): Promise<void> {
    await this.page.locator('button[name="addPokemon"]').click();
  }

  public async validateTeam(format: string, gen: string): Promise<void> {
    await this.page.locator('button[name="validate"]').click();
    await expect(this.page.locator("div.ps-popup")).toContainText(
      `Your team is valid for [Gen ${gen}] ${format}.`
    );
  }
}
