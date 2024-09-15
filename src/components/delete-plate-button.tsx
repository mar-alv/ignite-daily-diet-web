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

import { toastify } from '@/lib/toastify'

interface Props {
	id: string
}

export function DeletePlateButton({ id }: Props) {
	const queryClient = useQueryClient()

	const { isLoading, mutate } = useMutation(deletePlate, {
		onSuccess() {
			queryClient.invalidateQueries('getPlates')
			queryClient.invalidateQueries('getMetrics')

			toastify.successToast('Refeição excluída com sucesso!')
		},
		onError(e: Error) {
			toastify.errorToast(e?.message)
		}
	})

	async function handleDeletePlate() {
		mutate(id)
	}

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button size='lg' variant='outline' className='max-w-80 gap-2 flex-1'>
					<Trash size={18} />

					Excluir refeição
				</Button>
			</DialogTrigger>

			<DialogPortal>
				<DialogOverlay />

				<DialogContent aria-describedby={undefined}>
					<DialogHeader className='items-center'>
						<DialogTitle className='max-w-56 justify-self-center text-center text-lg font-bold text-primary'>
							Deseja realmente excluir o registro da refeição?
						</DialogTitle>
					</DialogHeader>

					<div className='gap-3 grid grid-cols-2 text-sm font-bold'>
						<DialogClose asChild>
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
