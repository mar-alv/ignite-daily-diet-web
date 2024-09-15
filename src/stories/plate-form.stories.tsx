import type { Meta, StoryObj } from '@storybook/react'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { PlateForm } from '@/components/plate-form'

import { PlateSchema, plateSchema } from '@/lib/zod'

const meta = {
  title: 'components/plate form',
  component: PlateForm,
  tags: ['autodocs'],
	render: ({ isLoading, onSubmit }) => {
		const form = useForm<PlateSchema>({
			resolver: zodResolver(plateSchema),
			defaultValues: {
				name: '',
				description: '',
				inDiet: 'true',
				createdAtDate: new Date(),
				createdAtHour: new Date().getHours().toString().padStart(2, '0') + ':00'
			}
		})

		return (
			<PlateForm form={form} isLoading={isLoading} onSubmit={onSubmit} />
		)
	}
} satisfies Meta<typeof PlateForm>

export default meta

export const Primary: StoryObj = {
	args: {
		isLoading: false,
		onSubmit: () => new Promise((resolve) => setTimeout(resolve, 2000)) 
	}
}
