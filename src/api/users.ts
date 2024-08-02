import { api } from '../lib/axios'
import { env } from '../env'
import { Metrics } from '../interfaces'

export async function getUserMetrics(): Promise<Metrics | null> {
	try {
		const response = await api.get(`/${env.VITE_USER_ID}/metrics`)

		return response.data
	} catch (e) {
		// TODO: Treat erros with a toast

		return null
	}
}
