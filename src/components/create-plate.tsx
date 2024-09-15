import { Plus } from '@phosphor-icons/react'

import { useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from 'react-query'
import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'

import { createPlate } from '@/api/plates'

import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogHeader,
	DialogOverlay,
	DialogPortal,
	DialogTitle,
	DialogTrigger
} from '@/components/ui/dialog'
import { PlateCreatedModal } from '@/components/plate-created-modal'
import { PlateForm } from '@/components/plate-form'

import { dateFns } from '@/lib/date-fns'
import { PlateSchema, plateSchema } from '@/lib/zod'
import { useToast } from '@/hooks/use-toast'

export function CreatePlate() {
	const [showCreatedModal, setShowCreatedModal] = useState(false)
	const [stayedInDiet, setStayedInDiet] = useState(false)

  const { toast } = useToast()

	const queryClient = useQueryClient()

	const { isLoading, mutate } = useMutation(createPlate, {
		onSuccess() {
			form.reset()

			setShowCreatedModal(true)

			queryClient.invalidateQueries('getMetrics')
			queryClient.invalidateQueries('getPlates')

			toast({
				title: 'Refeição criada com sucesso!',
				variant: 'success'
			})
		},
		onError(e: Error) {
			toast({
				title: e?.message,
				variant: 'error'
			})
		}
	})

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

	async function onSubmit(data: PlateSchema) {
		const createdAt = dateFns.getCreatedAt(data.createdAtDate, data.createdAtHour)

		mutate({
			name: data.name,
			description: data.description,
			inDiet: data.inDiet === 'true',
			createdAt
		})

		setStayedInDiet(data.inDiet === 'true')
	}

	function handleModalOpenChange(open: boolean) {
			if (!open) {
				setShowCreatedModal(false)
				setStayedInDiet(false)
			}
	}

	return (
		<Dialog onOpenChange={handleModalOpenChange}>
			<section className='grid'>
				<h2 className='text-primary'>
					Refeições
				</h2>

				<DialogTrigger className='mt-2' asChild>
					<Button size='lg' className='gap-2 justify-self-center'>
						<Plus className='size-[18px]' />

						<span className='text-sm font-bold'>
							Nova refeição
						</span>
					</Button>
				</DialogTrigger>

				<DialogPortal>
		      <DialogOverlay />

					{showCreatedModal ? (
						<PlateCreatedModal stayedInDiet={stayedInDiet} />
					) : (
						<DialogContent aria-describedby={undefined}>
							<div className='flex justify-end'>
								<DialogClose />
							</div>

							<DialogHeader>
								<DialogTitle className='sr-only'>
									Nova refeição
								</DialogTitle>
							</DialogHeader>

							<PlateForm form={form} isLoading={isLoading} onSubmit={onSubmit} />
						</DialogContent>
					)}
				</DialogPortal>
			</section>
		</Dialog>
	)
}
