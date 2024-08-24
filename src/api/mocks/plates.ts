import { HttpResponse, http } from 'msw'

export const createPlateMock = http.post('/:userId/plates', async() => {
	return HttpResponse.json({
		plateId: '54eed103-f6a5-49a4-9bed-93d2021632ed'
	})
})

export const getPlatesMock = http.get('/:userId/plates', async() => {
	return HttpResponse.json({
		plates: {
			'2024-08-11T18:34:20.848Z': [
				{
					id: 'dd17f272-cbc2-47ca-8dec-611ceb4b1fcd',
					name: 'Salada Natural Fresca',
					description: 'Uma leve e refrescante salada com uma variedade de verdes, perfeita para uma refeição saudável.',
					inDiet: true,
					createdAt: '2024-08-06T15:37:10.999Z',
					updatedAt: '2024-08-11T18:34:20.848Z'
				}
			]
		}
	})
})

export const updatePlateMock = http.put('/:userId/plates/:plateId', async() => {
	return HttpResponse.json()
})

export const deletePlateMock = http.delete('/:userId/plates/:plateId', async() => {
	return HttpResponse.json()
})
