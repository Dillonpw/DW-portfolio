import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000/");
});

test("has correct title", async ({ page }) => {
  await expect(page).toHaveTitle("Dillon Walsh - Web Developer");
});

test("home page redirect", async ({ page }) => {
  await page.goto("http://localhost:3000/projects");
  await page.locator(`a[href="/"]`).click();
  await expect(page).toHaveURL("http://localhost:3000/");
});

test.describe("Social and other links", () => {
  //requires logged in acc to view profiles
  test("X link should be visible and open in new tab", async ({
    page,
    context,
  }) => {
    const xLink = page.locator("#xLink");
    await expect(xLink).toBeVisible();

    const redirect = context.waitForEvent("page");
    await xLink.click();
    const newPage = await redirect;
    expect(newPage.url()).toContain("x.com");
    await newPage.close();
  });

  test("Github link should be visible and open in new tab", async ({
    page,
    context,
  }) => {
    const githubLink = page.locator("#githubLink");
    await expect(githubLink).toBeVisible();

    const redirect = context.waitForEvent("page");
    await githubLink.click();
    const newPage = await redirect;
    expect(newPage.url()).toBe("https://github.com/Dillonpw/");
    await newPage.close();
  });

  test("LinkedIn link should be visible and open in new tab", async ({
    page,
    context,
  }) => {
    const linkedinLink = page.locator("#linkedinLnk");
    await expect(linkedinLink).toBeVisible();

    const redirect = context.waitForEvent("page");
    await linkedinLink.click();
    const newPage = await redirect;
    expect(newPage.url()).toBe(
      "https://www.linkedin.com/in/dillon-walsh-50673b290/",
    );
    await newPage.close();
  });

  test("Sched Track link should be visible and open in new tab", async ({
    page,
    context,
  }) => {
    const schedtrackLink = page.locator('a[href="https://www.schedtrack.com"]');
    await expect(schedtrackLink).toBeVisible();

    const redirect = context.waitForEvent("page");
    await schedtrackLink.click();
    const newPage = await redirect;
    expect(newPage.url()).toBe("https://www.schedtrack.com/");
    await newPage.close();
  });

  test("Projects button redirects to projects page", async ({ page }) => {
    await page.getByRole("button", { name: "Projects" }).click();
    await expect(page).toHaveURL("http://localhost:3000/projects");
  });

  test("Blog button redirects to projects page", async ({ page }) => {
    await page.getByRole("button", { name: "Blog" }).click();
    await expect(page).toHaveURL("http://localhost:3000/blog");
  });
});

test.beforeEach("set default to projects page", async ({ page }) => {
  await page.goto("https://localhost:3000/projects");

  test("projects should redirect to each projects page", async ({ page }) => {
    await page.getByRole("link", { name: "Rotating Schedule Builder" }).click();
    await expect(page).toHaveURL("http://localhost:3000/rotating-schedule");
  });
  test("projects should redirect to each projects page", async ({ page }) => {
    await page.getByRole("link", { name: "Rotating Schedule Builder" }).click();
    await expect(page).toHaveURL("http://localhost:3000/rotating-schedule");
  });
  test("projects should redirect to each projects page", async ({ page }) => {
    await page.getByRole("link", { name: "Rotating Schedule Builder" }).click();
    await expect(page).toHaveURL("http://localhost:3000/rotating-schedule");
  });
  test("projects should redirect to each projects page", async ({ page }) => {
    await page.getByRole("link", { name: "Rotating Schedule Builder" }).click();
    await expect(page).toHaveURL("http://localhost:3000/rotating-schedule");
  });
  test("projects should redirect to each projects page", async ({ page }) => {
    await page.getByRole("link", { name: "Rotating Schedule Builder" }).click();
    await expect(page).toHaveURL("http://localhost:3000/rotating-schedule");
  });
});
