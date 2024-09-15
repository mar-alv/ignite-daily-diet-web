import { env } from '@/env'
import { api, getErrorMessage } from '@/lib/axios'

import { Metrics } from '@/interfaces'

export async function getMetrics(): Promise<Metrics | null> {
	try {
		const response = await api.get(`/${env.VITE_USER_ID}/metrics`)

		return response.data
	} catch (e) {
		throw new Error(getErrorMessage(e))
	}
}
