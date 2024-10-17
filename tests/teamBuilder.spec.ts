import { test } from "@playwright/test";

// Classes
import { HomePage } from "../pages/HomePage";
import { TeamListPage } from "../pages/TeamListPage";
import { TeamCreationPage } from "../pages/TeamCreationPage";
import { PokemonDetailsPage } from "../pages/PokemonDetailsPage";

// Data
import * as data from "../data/team.json";

test("Create and validate new team", async ({ page }) => {
  const homePage = new HomePage(page);
  const teamListPage = new TeamListPage(page);
  const teamCreationPage = new TeamCreationPage(page);
  const pokemonDetails = new PokemonDetailsPage(page);

  await homePage.navigate();
  await homePage.openTeamBuilder();

  await page.screenshot({ path: `./evidence/HomeNavigate.png` });

  await teamListPage.createNewTeam();
  await teamCreationPage.goToSelectFormat();
  await teamCreationPage.selectFormat(data.format, data.gen);

  for (const pokemon of data.pokemonList) {
    await teamCreationPage.goToPokemonCreation();

    await pokemonDetails.addPokemon(pokemon.name);
    await pokemonDetails.selectItem(pokemon.item);
    await pokemonDetails.selectMoves(pokemon.moves);
    await pokemonDetails.setEVStats(pokemon.evStats);

    await pokemonDetails.verifyTotalEvCount();
    await page.screenshot({ path: `./evidence/${pokemon.name}.png` });

    await pokemonDetails.goBackToTeam();
  }

  await page.screenshot({ path: `./evidence/team.png` });
  await teamCreationPage.validateTeam(data.format, data.gen);
});
