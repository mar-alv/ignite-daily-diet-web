export interface CreatePlateBody {
	name: string
	description?: string
	inDiet: boolean
}

export interface CreatePlateResponse {
	plateId: string
}
