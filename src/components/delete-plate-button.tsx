import { CircleNotch, Trash } from '@phosphor-icons/react'

import { useMutation, useQueryClient } from 'react-query'

import { deletePlate } from '@/api/plates'

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

interface Props {
	id: string
}

export function DeletePlateButton({ id }: Props) {
	const queryClient = useQueryClient()

	const { isLoading, mutate } = useMutation(deletePlate, {
		onSuccess: () => {
			queryClient.invalidateQueries('getPlates')
			queryClient.invalidateQueries('getMetrics')
		}
	})

	async function handleDeletePlate() {
		mutate(id)
	}

	return (
		<Dialog>
			<DialogTrigger>
				<Button size='lg' variant='outline'>
					<Trash size={18} />

					Excluir refeição
				</Button>
			</DialogTrigger>

			<DialogPortal>
				<DialogOverlay />

				<DialogContent aria-describedby={undefined} className='max-w-sm w-full p-6 gap-8 grid fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-s-2xl rounded-e-2xl bg-gray-700'>
					<DialogHeader>
						<DialogTitle className='max-w-56 justify-self-center text-center text-lg font-bold text-gray-200'>
							Deseja realmente excluir o registro da refeição?
						</DialogTitle>
					</DialogHeader>

					<div className='gap-3 grid grid-cols-2 text-sm font-bold'>
						<DialogClose>
							<Button size='lg' variant='outline'>
								Cancelar
							</Button>
						</DialogClose>

						<Button disabled={isLoading} onClick={handleDeletePlate} size='lg'>
							{isLoading ? (
								<CircleNotch size={18} className='animate-spin' />
							) :
								'Sim, excluir'
							}
						</Button>
					</div>
				</DialogContent>
			</DialogPortal>
		</Dialog>
	)
}
