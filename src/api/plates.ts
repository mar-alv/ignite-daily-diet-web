import { env } from '@/env'

import {
	CreatePlateBody,
	CreatePlateResponse,
	GetPlatesResponse,
	UpdatePlateBody,
	UpdatePlateResponse
} from '@/interfaces'

import { api, getErrorMessage } from '@/lib/axios'

export async function createPlate(plate: CreatePlateBody): Promise<CreatePlateResponse> {
	try {
		const response = await api.post(`/${env.VITE_USER_ID}/plates`, plate)

		return response.data
	} catch (e) {
		throw new Error(getErrorMessage(e))
	}
}

export async function getPlates(): Promise<GetPlatesResponse | null> {
	try {
		const response = await api.get(`/${env.VITE_USER_ID}/plates`)

		return response.data
	} catch (e) {
		throw new Error(getErrorMessage(e))
	}
}

export async function updatePlate(plate: UpdatePlateBody): Promise<UpdatePlateResponse> {
	try {
		const response = await api.put(`/${env.VITE_USER_ID}/plates/${plate.id}`, plate)

		return response.data
	} catch (e) {
		throw new Error(getErrorMessage(e))
	}
}

export async function deletePlate(id: string) {
	try {
		await api.delete(`/${env.VITE_USER_ID}/plates/${id}`)

	} catch (e) {
		throw new Error(getErrorMessage(e))
	}
}
