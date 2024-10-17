import { test, expect } from '@playwright/test';

// Classes
import { HomePage } from "../pages/HomePage";
import { TeamListPage } from '../pages/TeamListPage';
import { TeamCreationPage } from '../pages/TeamCreationPage';

// Data
import * as data from "../data/team.json";

test("Create and validate new team", async ({ page }) => {
  const homePage = new HomePage(page);
  const teamListPage = new TeamListPage(page);
  const teamCreationPage = new TeamCreationPage(page);

  await homePage.navigate();
  await homePage.openTeamBuilder();

  await page.screenshot({ path: `./evidence/HomeNavigate.png` });
  await teamListPage.createNewTeam();
  await teamCreationPage.goToSelectFormat();
  await teamCreationPage.selectFormat(data.format, data.gen);
  await teamCreationPage.goToPokemonCreation();


});


