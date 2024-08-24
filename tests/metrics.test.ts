import { expect, test } from '@playwright/test'

test('should display the user\'s metrics', async ({ page }) => {
  await page.goto('/', {
		waitUntil: 'networkidle'
	})

	await expect(page.getByText('das refeições dentro da dieta', { exact: true })).toBeVisible()
	await expect(page.getByText('melhor sequência de pratos dentro da dieta')).toBeVisible()
	await expect(page.getByText('refeições registradas')).toBeVisible()
	await expect(page.getByText('refeições dentro da dieta', { exact: true })).toBeVisible()
	await expect(page.getByText('refeições fora da dieta')).toBeVisible()
})
