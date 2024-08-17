import * as Dialog from '@radix-ui/react-dialog'

import { CircleNotch, Trash } from '@phosphor-icons/react'

import { useMutation, useQueryClient } from 'react-query'

import { deletePlate } from '@/api'

interface Props {
	id: string
}

// TODO: create stories
// animate delete with framer motion
export function DeletePlateButton({ id }: Props) {
	const queryClient = useQueryClient()

	const { isLoading, mutate } = useMutation(deletePlate, {
		onSuccess: () => {
			queryClient.invalidateQueries('getPlates')
		}
	})

	async function handleDeletePlate() {
		mutate(id)
	}

	return (
		<Dialog.Root>
			<Dialog.Trigger className='max-w-80 w-full py-4 px-6 gap-3 flex justify-center items-center rounded-md border-[1px] border-gray-100 text-sm text-gray-100 hover:bg-gray-600'>
				<Trash size={18} />

				Excluir refeição
			</Dialog.Trigger>

			<Dialog.Portal>
				<Dialog.Overlay className='inset-0 absolute bg-gray-300 bg-opacity-70' />

				<Dialog.Content aria-describedby={undefined} className='max-w-sm w-full p-6 gap-8 grid fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-s-2xl rounded-e-2xl bg-gray-700'>
					<Dialog.Title className='max-w-56 justify-self-center text-center text-lg font-bold text-gray-200'>
						Deseja realmente excluir o registro da refeição?
					</Dialog.Title>

					<div className='gap-3 grid grid-cols-2 text-sm font-bold'>
						<Dialog.Close className='py-4 px-6 gap-3 flex justify-center items-center rounded-md border-[1px] border-gray-100 text-sm text-gray-100 hover:bg-gray-600'>
							Cancelar
						</Dialog.Close>

						<button disabled={isLoading} onClick={handleDeletePlate} className='py-4 px-6 gap-3 flex justify-center items-center rounded-md border-[1px] border-gray-100 text-sm text-white bg-gray-100 hover:bg-gray-300 disabled:bg-gray-300 disabled:cursor-not-allowed'>
							{isLoading ? (
								<CircleNotch size={18} className='animate-spin' />
							) :
								'Sim, excluir'
							}
						</button>
					</div>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	)
}
