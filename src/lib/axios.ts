import axios, { AxiosError } from 'axios'

import { env } from '@/env'

import { ApiErrorResponse } from '@/interfaces'

document.cookie = env.VITE_COOKIE

export const api = axios.create({
	baseURL: env.VITE_API_BASE_URL,
	withCredentials: true
})

function isAxiosError(error: any): error is AxiosError {
  return error?.isAxiosError === true
}

export function getErrorMessage(error: unknown) {
  if (!isAxiosError(error))
		return 'Ocorreu um erro inesperado'

	const errorData = error.response?.data as ApiErrorResponse

	return errorData?.error || 'Ocorreu um erro interno'
}
