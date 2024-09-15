import { PencilSimpleLine } from '@phosphor-icons/react'

import { useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from 'react-query'
import { zodResolver } from '@hookform/resolvers/zod'

import { updatePlate } from '@/api/plates'

import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogOverlay,
	DialogPortal,
	DialogTitle,
	DialogTrigger
} from '@/components/ui/dialog'
import { PlateForm } from '@/components/plate-form'

import { Plate } from '@/interfaces'

import { dateFns } from '@/lib/date-fns'
import { plateSchema, PlateSchema } from '@/lib/zod'

interface Props {
	plate: Plate
}

export function UpdatePlateButton({ plate }: Props) {
	const queryClient = useQueryClient()

	const { isLoading, mutate } = useMutation(updatePlate, {
		onSuccess: () => {
			queryClient.invalidateQueries('getMetrics')
			queryClient.invalidateQueries('getPlates')
		}
	})

	const form = useForm<PlateSchema>({
		resolver: zodResolver(plateSchema),
		defaultValues: {
			name: plate.name,
			description: plate.description,
			inDiet: plate.inDiet ? 'true' : 'false',
			createdAtDate: new Date(plate.createdAt),
			createdAtHour: dateFns.formatAsHours(plate.createdAt)
		}
	})

	async function onSubmit(data: PlateSchema) {
		mutate({
			id: plate.id,
			name: data.name,
			description: data.description,
			inDiet: data.inDiet === 'true',
			createdAt: dateFns.getCreatedAt(data.createdAtDate, data.createdAtHour)
		})
	}

	function handleModalOpenChange(open: boolean) {
			if (!open) {
				form.reset()
			}
	}

	return (
		<Dialog onOpenChange={handleModalOpenChange}>
			<DialogTrigger asChild>
				<Button size='lg' className='max-w-80 gap-2 flex-1'>
					<PencilSimpleLine size={18} />

					Editar refeição
				</Button>
			</DialogTrigger>

			<DialogPortal>
				<DialogOverlay />

				<DialogContent aria-describedby={undefined}>
					<DialogHeader>
						<DialogTitle className='sr-only'>
							Editar refeição
						</DialogTitle>
					</DialogHeader>

					<PlateForm form={form} isLoading={isLoading} onSubmit={onSubmit} />
				</DialogContent>
			</DialogPortal>
		</Dialog>
	)
}
