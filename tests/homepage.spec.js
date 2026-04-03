const { test, expect } = require('@playwright/test');

test('homepage loads', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('body')).toBeVisible();
});

test('page title is correct', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle('Photography Portfolio');
});

test('navigation is visible', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('nav')).toBeVisible();

  await expect(page.getByRole('link', { name: 'Gallery' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Contact' })).toBeVisible();
});

test('hero section content is visible', async ({ page }) => {
  await page.goto('/');

  await expect(page.locator('.hero')).toBeVisible();
  await expect(page.getByText('LANDSCAPE & TRAVEL PHOTOGRAPHY')).toBeVisible();
  await expect(page.getByText('Through the')).toBeVisible();
  await expect(page.getByRole('button', { name: 'View Gallery' })).toBeVisible();
});

test('gallery section is displayed with images', async ({ page }) => {
  await page.goto('/');

  await expect(page.locator('#gallery')).toBeVisible();
  await expect(page.locator('#gallery h3')).toHaveText('Portfolio');

  const images = page.locator('#gallery img');
  await expect(images).toHaveCount(4);
});

test('contact section is visible', async ({ page }) => {
  await page.goto('/');

  await expect(page.locator('#contact')).toBeVisible();
  await expect(page.getByText('Let’s Work Together')).toBeVisible();

  await expect(page.getByText('Email')).toBeVisible();
  await expect(page.getByText('Instagram')).toBeVisible();
  await expect(page.getByText('Location')).toBeVisible();
});

test('footer is visible', async ({ page }) => {
  await page.goto('/');

  await expect(page.locator('footer')).toBeVisible();
  await expect(page.getByText('© 2026 Photography Portfolio')).toBeVisible();
});

test('mobile view works correctly', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/');

  await expect(page.locator('nav')).toBeVisible();
  await expect(page.locator('.hero')).toBeVisible();
});