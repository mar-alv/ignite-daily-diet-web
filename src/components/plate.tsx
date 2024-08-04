import clsx from 'clsx'

import * as Dialog from '@radix-ui/react-dialog'

import { dateFns } from '../lib'
import { Plate as IPlate } from '../interfaces'
import { ArrowLeft } from '@phosphor-icons/react'

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
				<Dialog.Content
					aria-describedby={undefined}
					className={clsx(
						'fixed inset-0 bg-gray-500',
						inDiet ? 'bg-green-light' : 'bg-red-light'
					)}
				>
					<div className='p-6 flex text-center'>
						<Dialog.Close>
							<ArrowLeft className='size-6 text-gray-200' />
						</Dialog.Close>

						<Dialog.Title className='flex-1 text-lg font-bold text-gray-100'>
							Refeição
						</Dialog.Title>
					</div>	

					<div className='h-full p-6 gap-6 grid items-center content-start relative rounded-s-2xl rounded-e-2xl bg-gray-700'>
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
						{/* <Form.Submit
							disabled={!isFormValid()}
							className={clsx(
								'max-w-80 w-full h-12 py-4 px-6 bottom-[100px] mx-auto justify-self-center absolute',
								'rounded-md text-sm font-bold text-white bg-gray-100',
								'hover:bg-gray-200',
								!isFormValid() && 'cursor-not-allowed disabled:bg-gray-400'
							)}
						>
							Cadastrar refeição
						</Form.Submit> */}
					</div>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	)
}
