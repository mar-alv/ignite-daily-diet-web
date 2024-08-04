export interface GetPlatesResponse {
  plates: Plates
}

export interface Plates {
  [date: string]: Plate[]
}

export interface Plate {
	id: string
  name: string
  description: string
  inDiet: boolean
  createdAt: string
  updatedAt: string
}
