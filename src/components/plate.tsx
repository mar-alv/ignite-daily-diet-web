import clsx from 'clsx'
import * as Accordion from '@radix-ui/react-accordion'
import * as Dialog from '@radix-ui/react-dialog'
import { PencilSimpleLine, Trash, X } from '@phosphor-icons/react'

import { dateFns } from '../lib'
import { Plate as IPlate } from '../interfaces'

interface Props {
	plate: IPlate
}

export function Plate({ plate }: Props) {
	const { createdAt, description, id, inDiet, name, updatedAt } = plate

	return (
		<Accordion.Root collapsible type='single'>
			<Accordion.Item value={id} className='group'>
				<Accordion.Header>
					<Accordion.Trigger asChild>
						<div className='py-[14px] px-4 flex justify-between items-center border-[1px] border-gray-500 rounded-md cursor-pointer'>
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
					</Accordion.Trigger>
				</Accordion.Header>

				<Accordion.Content className='gap-6 flex-1 flex flex-col justify-between group-data-[state=open]:p-4'>
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

					<div className='gap-2 flex flex-wrap justify-center'>
						<button className='max-w-80 w-full py-4 px-6 gap-3 flex justify-center items-center rounded-md border-[1px] border-gray-100 text-sm text-white bg-gray-100 hover:bg-gray-300'>
							<PencilSimpleLine size={18} />

							Editar refeição
						</button>

						<button className='max-w-80 w-full py-4 px-6 gap-3 flex justify-center items-center rounded-md border-[1px] border-gray-100 text-sm text-gray-100 hover:bg-gray-600'>
							<Trash size={18} />

							Excluir refeição
						</button>
					</div>
				</Accordion.Content>
			</Accordion.Item>
		</Accordion.Root>
	)
}
