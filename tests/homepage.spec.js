const { test, expect } = require('@playwright/test');

test('homepage loads successfully', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('body')).toBeVisible();
});

test('page title is correct', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle('MountJoy Photographer | Travel and Landscape Photography in Dublin');
});

test('meta description is present', async ({ page }) => {
  await page.goto('/');
  const description = page.locator('meta[name="description"]');
  await expect(description).toHaveAttribute(
    'content',
    /MountJoy Photographer is a landscape and trips photographer in Dublin/i
  );
});

test('navigation and main links are visible', async ({ page }) => {
  await page.goto('/');

  const nav = page.locator('nav.nav-links');
  await expect(page.locator('header.topbar')).toBeVisible();
  await expect(nav).toBeVisible();

  await expect(nav.getByRole('link', { name: 'Home' })).toBeVisible();
  await expect(nav.getByRole('link', { name: 'About' })).toBeVisible();
  await expect(nav.getByRole('link', { name: 'Portfolio' })).toBeVisible();
  await expect(nav.getByRole('link', { name: 'Services' })).toBeVisible();
  await expect(nav.getByRole('link', { name: 'Contact' })).toBeVisible();
});

test('hero section content and CTA buttons are visible', async ({ page }) => {
  await page.goto('/');

  await expect(page.locator('.hero')).toBeVisible();
  await expect(page.getByText('Dublin-Based Travel & Landscape Storytelling')).toBeVisible();
  await expect(
    page.getByRole('heading', {
      name: /Elegant imagery for journeys, places and people who want to remember how it felt\./i
    })
  ).toBeVisible();

  await expect(page.getByRole('link', { name: 'View Portfolio' }).first()).toBeVisible();
  await expect(page.getByRole('link', { name: 'Make an Inquiry' })).toBeVisible();
});

test('hero stats cards are displayed', async ({ page }) => {
  await page.goto('/');

  const stats = page.locator('.hero-stats .stat');
  await expect(stats).toHaveCount(4);
});

test('featured work section contains 3 cards', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByText('Featured Work')).toBeVisible();
  await expect(page.locator('.grid-3 .card').first()).toBeVisible();

  const featuredCards = page.locator('.section .grid-3 .card');
  await expect(featuredCards).toHaveCount(3);
});

test('services section contains 4 feature cards', async ({ page }) => {
  await page.goto('/');

  const serviceCards = page.locator('.feature-card');
  await expect(serviceCards).toHaveCount(4);
});

test('testimonials section contains 3 testimonial cards', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByText('Testimonials')).toBeVisible();

  const testimonials = page.locator('.testimonial-card');
  await expect(testimonials).toHaveCount(3);
});

test('instagram preview section contains 4 links', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByText('Instagram Preview')).toBeVisible();

  const instaCards = page.locator('.insta-card');
  await expect(instaCards).toHaveCount(4);
});

test('blog section contains 3 articles', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByText('Latest stories and inspiration.')).toBeVisible();

  const blogCards = page.locator('.blog-card');
  await expect(blogCards).toHaveCount(3);
});

test('download guide link exists', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('link', { name: 'Download Guide' })).toBeVisible();
});

test('footer is visible with contact details', async ({ page }) => {
  await page.goto('/');

  await expect(page.locator('footer.footer')).toBeVisible();
  await expect(page.getByText('© 2026 MountJoy Photographer. Crafted for premium storytelling in Dublin and beyond.')).toBeVisible();
  await expect(page.getByRole('link', { name: 'hello@mountjoyphotographer.com' })).toBeVisible();
});

test('mobile view loads correctly', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/');

  await expect(page.locator('body')).toBeVisible();
  await expect(page.locator('.mobile-toggle')).toBeVisible();
  await expect(page.locator('.hero')).toBeVisible();
});