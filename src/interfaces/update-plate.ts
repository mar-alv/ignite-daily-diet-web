export interface UpdatePlateBody {
	id: string
	name: string
	description?: string
	inDiet: boolean
	createdAt: string
}

export interface UpdatePlateResponse {
	plateId: string
}
