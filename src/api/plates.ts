import { api } from '../lib'
import { CreatePlateBody, CreatePlateResponse, GetPlatesResponse } from '../interfaces'
import { env } from '../env'

export async function createPlate(plate: CreatePlateBody): Promise<CreatePlateResponse> {
	try {
		const response = await api.post(`/${env.VITE_USER_ID}/plates`, plate)

		return response.data
	} catch (e) {
		// TODO: Treat erros with a toast

		return { plateId: '' }
	}
}

export async function getPlates(): Promise<GetPlatesResponse | null> {
	try {
		const response = await api.get(`/${env.VITE_USER_ID}/plates`)

		return response.data
	} catch (e) {
		// TODO: Treat erros with a toast

		return null
	}
}

export async function deletePlate(id: string) {
	try {
		await api.delete(`/${env.VITE_USER_ID}/plates/${id}`)
	} catch (e) {
		// TODO: Treat erros with a toast

		return null
	}
}
