const { test, expect } = require('@playwright/test');

test('about page loads', async ({ page }) => {
  await page.goto('/pages/about.html');
  await expect(page.locator('body')).toBeVisible();
});

test('portfolio page loads', async ({ page }) => {
  await page.goto('/pages/portfolio.html');
  await expect(page.locator('body')).toBeVisible();
});

test('services page loads', async ({ page }) => {
  await page.goto('/pages/services.html');
  await expect(page.locator('body')).toBeVisible();
});

test('packages page loads', async ({ page }) => {
  await page.goto('/pages/packages.html');
  await expect(page.locator('body')).toBeVisible();
});

test('prints page loads', async ({ page }) => {
  await page.goto('/pages/prints.html');
  await expect(page.locator('body')).toBeVisible();
});

test('blog page loads', async ({ page }) => {
  await page.goto('/pages/blog.html');
  await expect(page.locator('body')).toBeVisible();
});

test('faq page loads', async ({ page }) => {
  await page.goto('/pages/faq.html');
  await expect(page.locator('body')).toBeVisible();
});

test('contact page loads', async ({ page }) => {
  await page.goto('/pages/contact.html');
  await expect(page.locator('body')).toBeVisible();
});