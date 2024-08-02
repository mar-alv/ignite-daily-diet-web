import { api } from '../lib/axios'
import { CreatePlate } from '../interfaces'
import { env } from '../env'

export async function createPlate(plate: CreatePlate) {
	try {
		await api.post(`/${env.VITE_USER_ID}/plates`, plate)
	} catch (e) {
		// TODO: Treat erros with a toast
	}
}
