import axios from 'axios'
import { env } from '../env'

document.cookie = env.VITE_COOKIE

export const api = axios.create({
	baseURL: env.VITE_API_BASE_URL,
	withCredentials: true,
})
