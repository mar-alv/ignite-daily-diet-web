import { api } from '../lib/axios'

// TODO: Treat erros with a toast
export async function getUserMetrics() {
	await new Promise(resolve => {
		setTimeout(resolve, 2000)
	})

	try {
		const response = await api.get('/54eed103-f6a5-49a4-9bed-93d2021632ed/metrics')

		return response.data
	} catch (e) {
		return null
	}
}
