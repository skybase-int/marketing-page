import { test, expect } from '@playwright/test';
import {
  reject,
  goToRegisterPage,
  handleTwitterPopups,
  connectWalletFromStepTwo,
  verifyTweetUrl,
  connectWalletFromHeader,
  finish
} from './utils';

test('register, connect wallet in second step', async ({ page }) => {
  await page.goto('');
  await goToRegisterPage(page);
  await handleTwitterPopups(page);
  await verifyTweetUrl(page);
  await reject(async () => {
    await connectWalletFromStepTwo(page);
    await expect(page.getByText('Something went wrong')).toBeVisible();
    await page.getByRole('button', { name: 'Cancel' }).click();
    await page.getByText('Sign Message').first().click();
    await expect(page.getByText('Something went wrong')).toBeVisible();
  }, page);
  await page.getByRole('button', { name: 'Try Again' }).click();
  await finish(page);
});

test('register, connect wallet in beginning', async ({ page }) => {
  await page.goto('');
  await connectWalletFromHeader(page);
  await goToRegisterPage(page);
  await handleTwitterPopups(page);
  await verifyTweetUrl(page);
  await reject(async () => {
    await page.getByText('Sign Message').first().click();
    await expect(page.getByText('Something went wrong')).toBeVisible();
    await page.getByRole('button', { name: 'Cancel' }).click();
    await page.getByText('Sign Message').first().click();
    await expect(page.getByText('Something went wrong')).toBeVisible();
  }, page);
  await page.getByRole('button', { name: 'Try Again' }).click();
  await finish(page);
});
