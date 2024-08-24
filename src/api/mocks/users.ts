import { HttpResponse, http } from 'msw'

export const getMetricsMock = http.get('/:userId/metrics', () => {
	return HttpResponse.json({
		bestDietSequence: 1,
		dietPercentage: 50,
		platesAmount: 2,
		platesOnDiet: 1,
		platesOutOfDiet: 1
	})
})


export const getMetricsMock2 = http.get('/:userId/metrics', () => {
	return HttpResponse.json({
		bestDietSequence: 1,
		dietPercentage: 100,
		platesAmount: 1,
		platesOnDiet: 0,
		platesOutOfDiet: 1
	})
})

