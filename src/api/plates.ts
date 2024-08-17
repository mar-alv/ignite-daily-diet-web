import { api } from '@/lib'
import {
	CreatePlateBody,
	CreatePlateResponse,
	GetPlatesResponse,
	UpdatePlateBody,
	UpdatePlateResponse
} from '@/interfaces'
import { env } from '@/env'
import { toastify } from '@/lib'

export async function createPlate(plate: CreatePlateBody): Promise<CreatePlateResponse> {
	try {
		const response = await api.post(`/${env.VITE_USER_ID}/plates`, plate)

		toastify.successToast('Refeição criada com sucesso!')

		return response.data
	} catch (e) {
		toastify.errorToast('Não foi possível criar a refeição!')

		return { plateId: '' }
	}
}

export async function getPlates(): Promise<GetPlatesResponse | null> {
	try {
		const response = await api.get(`/${env.VITE_USER_ID}/plates`)

		return response.data
	} catch (e) {
		toastify.errorToast('Não foi possível listar as refeições criadas!')

		return null
	}
}

export async function updatePlate(plate: UpdatePlateBody): Promise<UpdatePlateResponse> {
	try {
		const response = await api.put(`/${env.VITE_USER_ID}/plates/${plate.id}`, plate)

		toastify.successToast('Refeição atualizada com sucesso!')

		return response.data
	} catch (e) {
		toastify.errorToast('Não foi possível atualizar a refeição!')

		return { plateId: '' }
	}
}

export async function deletePlate(id: string) {
	try {
		await api.delete(`/${env.VITE_USER_ID}/plates/${id}`)

		toastify.successToast('Refeição excluída com sucesso!')
	} catch (e) {
		toastify.errorToast('Não foi possível excluir a refeição!')
	}
}
