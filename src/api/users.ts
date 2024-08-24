import { api, toastify } from '@/lib'
import { env } from '@/env'
import { Metrics } from '@/interfaces'

export async function getMetrics(): Promise<Metrics | null> {
	try {
		const response = await api.get(`/${env.VITE_USER_ID}/metrics`)

		return response.data
	} catch (e) {
		toastify.errorToast('Não foi possível carregar as suas métricas!')

		return null
	}
}
