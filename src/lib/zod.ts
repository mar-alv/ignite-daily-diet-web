import { z } from 'zod'

export const plateSchema = z.object({
  name: z.string()
		.min(2, {
			message: 'O nome deve ter pelo menos 2 caracteres.'
		}),
  description: z.string()
		.optional(),
  inDiet: z.enum(['true', 'false']),
  createdAtDate: z.date(),
  createdAtHour: z.string()
		.regex(/^(?:[01]\d|2[0-3]):[0-5]\d$/, {
			message: 'Informe uma hora válida'
		})
})

export type PlateSchema = z.infer<typeof plateSchema>
