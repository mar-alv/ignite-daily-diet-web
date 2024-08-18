import clsx from 'clsx'

import * as Accordion from '@radix-ui/react-accordion'

import { memo } from 'react'

import { dayjs } from '@/lib'
import { Plate as IPlate } from '@/interfaces'
import { DeletePlateButton, UpdatePlateButton } from '@/components'

interface Props {
	plate: IPlate
}

// TODO: create stories
export const Plate = memo(({ plate }: Props) => {
	const { createdAt, description, id, inDiet, name, updatedAt } = plate

	// TODO: loading btn as the plate is deleted
	return (
		<Accordion.Root collapsible type='single'>
			<Accordion.Item value={id} className='group'>
				<Accordion.Header>
					<Accordion.Trigger asChild>
						<div className='py-[14px] px-4 flex justify-between items-center border-[1px] border-gray-500 rounded-md cursor-pointer'>
							<div className='gap-[10px] flex justify-between items-center'>
								<span>
									{dayjs.getHoursAndMinutes(updatedAt)}
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
								{dayjs.toFormattedCreatedAt(createdAt)}
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
						<UpdatePlateButton plate={plate} />
						<DeletePlateButton id={id} />
					</div>
				</Accordion.Content>
			</Accordion.Item>
		</Accordion.Root>
	)
})
