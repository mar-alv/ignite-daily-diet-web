import { z } from 'zod'

const envSchema = z.object({
	VITE_API_BASE_URL: z.string().url(),
	VITE_COOKIE: z.string()
})

export const env = envSchema.parse(import.meta.env)
