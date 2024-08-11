import clsx from 'clsx'
import * as Dialog from '@radix-ui/react-dialog'
import { PencilSimpleLine, Trash, X } from '@phosphor-icons/react'

import { dateFns } from '../lib'
import { Plate as IPlate } from '../interfaces'

interface Props {
	plate: IPlate
}

export function Plate({ plate }: Props) {
	const { createdAt, description, inDiet, name, updatedAt } = plate

	return (
		<Dialog.Root>
			<Dialog.Trigger asChild>
				<div className='py-[14px] p-4 flex justify-between items-center border-[1px] border-gray-500 rounded-md cursor-pointer'>
					<div className='gap-[10px] flex justify-between items-center'>
						<span>
							{dateFns.getHoursAndMinutes(updatedAt)}
						</span>

						<hr className='w-[1px] h-[14px] bg-gray-400' />

						<h4 className='max-w-44 truncate'>
							{name}
						</h4>
					</div>

					<div
						className={clsx(
							'size-[14px] rounded-full',
							inDiet ? 'bg-green-mid' : 'bg-red-mid'
						)}
					/>
				</div>
			</Dialog.Trigger>

			<Dialog.Portal>
				<Dialog.Overlay className='inset-0 absolute bg-gray-300 bg-opacity-70' />

				<Dialog.Content aria-describedby={undefined} className='max-w-sm w-full p-6 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-s-2xl rounded-e-2xl bg-gray-700'>
					<div className='flex justify-end'>
						<Dialog.Close>
							<X className='size-6 text-gray-200' />
						</Dialog.Close>

						<Dialog.Title className='sr-only'>
							Refeição
						</Dialog.Title>
					</div>

					<div className='gap-6 flex-1 flex flex-col justify-between rounded-s-2xl rounded-e-2xl'>
						<div className='gap-6 grid'>
							<div className='gap-2 grid'>
								<h1 className='text-xl font-bold text-gray-100'>
									{name}
								</h1>

								{description && (
									<p className='text-base text-gray-200'>
										{description}
									</p>
								)}
							</div>

							<div className='gap-2 grid'>
								<h3 className='text-sm font-bold text-gray-100'>
									Data e hora
								</h3>

								<p className='text-base text-gray-200'>
									{dateFns.toFormattedCreatedAt(createdAt)}
								</p>
							</div>

							<div className='py-2 px-4 gap-2 flex items-center justify-self-start rounded-full bg-gray-600'>
								<div
									className={clsx(
										'size-2 rounded-full',
										inDiet ? 'bg-green-dark' : 'bg-red-dark'
									)}
								/>

								<span className='text-sm text-gray-100'>
									{inDiet ? 'dentro da dieta' : 'fora da dieta' }
								</span>
							</div>
						</div>

						<div className='gap-2 grid justify-items-center'>
							<button className='max-w-80 w-full py-4 px-6 gap-3 flex justify-center items-center rounded-md border-[1px] border-gray-100 text-sm text-white bg-gray-100 hover:bg-gray-300'>
								<PencilSimpleLine size={18} />

								Editar refeição
							</button>

							<button className='max-w-80 w-full py-4 px-6 gap-3 flex justify-center items-center rounded-md border-[1px] border-gray-100 text-sm text-gray-100 hover:bg-gray-600'>
								<Trash size={18} />

								Excluir refeição
							</button>
						</div>
					</div>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	)
}
