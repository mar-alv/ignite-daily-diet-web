import { expect, test } from '@playwright/test'

test('should create a new plate on diet', async ({ page }) => {
  await page.goto('/', {
		waitUntil: 'networkidle'
	})

	await page.getByText('Nova refeição').click()
	await page.getByLabel('Nome').fill('Salada Natural Fresca')
	await page.getByLabel('Descrição').fill('Uma leve e refrescante salada com uma variedade de verdes, perfeita para uma refeição saudável.')
	await page.getByTestId('on-diet-radio').click()
	await page.getByText('Confirmar').click()

	await expect(page.getByText('Refeição criada com sucesso!').first()).toBeVisible()
	await expect(page.getByText('Continue assim!')).toBeVisible()
})

test('should create a new plate out of diet', async ({ page }) => {
  await page.goto('/', {
		waitUntil: 'networkidle'
	})

	await page.getByText('Nova refeição').click()
	await page.getByLabel('Nome').fill('X-tudo')
	await page.getByLabel('Descrição').fill('Maior e mais gostoso da região pra saciar o apetite pelo resto do dia.')
	await page.getByTestId('out-of-diet-radio').click()
	await page.getByText('Confirmar').click()

	await expect(page.getByText('Refeição criada com sucesso!').first()).toBeVisible()
	await expect(page.getByText('Que pena!')).toBeVisible()
})

test('should edit a plate', async ({ page }) => {
  await page.goto('/', {
		waitUntil: 'networkidle'
	})

	await page.getByText('Salada Natural Fresca').click()
	await page.getByText('Editar refeição').click()
	await page.getByLabel('Nome').fill('X-tudo')
	await page.getByLabel('Descrição').fill('Maior e mais gostoso da região pra saciar o apetite pelo resto do dia.')
	await page.getByTestId('out-of-diet-radio').click()
	await page.getByText('Confirmar').click()

	await expect(page.getByText('Refeição atualizada com sucesso!').first()).toBeVisible()
})

test('should delete a plate', async ({ page }) => {
  await page.goto('/', {
		waitUntil: 'networkidle'
	})

	await page.getByText('Salada Natural Fresca').click()
	await page.getByText('Excluir refeição').click()
	await page.getByText('Sim, excluir').click()
	await expect(page.getByText('Refeição excluída com sucesso!').first()).toBeVisible()
})
