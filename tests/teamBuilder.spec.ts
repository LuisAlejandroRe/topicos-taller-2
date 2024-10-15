import { test, expect } from '@playwright/test';

// Classes
import { HomePage } from "../pages/HomePage";

// Data
import * as data from "../data/team.json";

test("Create and validate new team", async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.navigate();
  await homePage.openTeamBuilder();

  await page.screenshot({ path: `./evidence/HomeNavigate.png` });
});


