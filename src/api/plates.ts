import { api } from '../lib/axios'
import { CreatePlate } from '../interfaces'
import { env } from '../env'

interface CreatePlateResponse {
	plateId: string
}

export async function createPlate(plate: CreatePlate): Promise<CreatePlateResponse> {
	try {
		const response = await api.post(`/${env.VITE_USER_ID}/plates`, plate)

		return response.data
	} catch (e) {
		// TODO: Treat erros with a toast

		return { plateId: '' }
	}
}
