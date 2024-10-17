import { expect, Page } from "@playwright/test";

interface IMoves {
  "1": string;
  "2": string;
  "3": string;
  "4": string;
}

interface IEVStats {
  hp: string;
  atk: string;
  def: string;
  spa: string;
  spd: string;
  spe: string;
}

export class PokemonDetailsPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  public async addPokemon(name: string): Promise<void> {
    const searchPokemonInput = this.page.locator('input[name="pokemon"]');
    await searchPokemonInput.click();
    await searchPokemonInput.pressSequentially(name);
    await this.page.locator(`a[data-entry="pokemon|${name}"]`).click();
  }

  public async selectItem(item: string): Promise<void> {
    const itemInput = this.page.locator('input[name="item"]');
    await itemInput.click();
    await itemInput.pressSequentially(item);
  }

  public async selectMoves(moves: IMoves): Promise<void> {
    for (const number in moves) {
      if (Object.prototype.hasOwnProperty.call(moves, number)) {
        const move = moves[number];
        const moveInput = this.page.locator(`input[name="move${number}"]`);
        await moveInput.click();
        await moveInput.pressSequentially(move);
      }
    }
  }

  public async setEVStats(evStats: IEVStats): Promise<void> {
    await this.page.locator('button[name="stats"]').click();

    for (const stat in evStats) {
      if (Object.prototype.hasOwnProperty.call(evStats, stat)) {
        const value = evStats[stat];
        await this.page.locator(`input[name="evslider-${stat}"]`).fill(value);
      }
    }
  }

  public async verifyTotalEvCount(): Promise<void> {
    await expect(this.page.locator("div.totalev")).toContainText("0");
  }

  public async goBackToTeam(): Promise<void> {
    await this.page.locator('button[name="back"]').click();
  }
}
