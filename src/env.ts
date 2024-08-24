import { z } from 'zod'

const envSchema = z.object({
	MODE: z.enum(['production', 'development', 'test']).default('production'),
	VITE_API_BASE_URL: z.string().default('http://localhost:3001/users'),
	VITE_COOKIE: z.string(),
	VITE_USER_ID: z.string().uuid()
})

export const env = envSchema.parse(import.meta.env)
