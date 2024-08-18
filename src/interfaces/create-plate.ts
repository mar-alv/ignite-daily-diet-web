export interface CreatePlateBody {
	name: string
	description?: string
	inDiet: boolean
	createdAt: string
}

export interface CreatePlateResponse {
	plateId: string
}
