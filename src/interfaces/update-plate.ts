export interface UpdatePlateBody {
	id: string
	name: string
	description?: string
	inDiet: boolean
}

export interface UpdatePlateResponse {
	plateId: string
}
