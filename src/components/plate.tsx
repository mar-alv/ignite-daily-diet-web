import clsx from 'clsx'

import { memo } from 'react'

import { DeletePlate } from '@/components/delete-plate'
import { UpdatePlate } from '@/components/update-plate'

import { Plate as IPlate } from '@/interfaces'

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from '@/components/ui/accordion'

import { dateFns } from '@/lib/date-fns'

interface Props {
	plate: IPlate
}

export const Plate = memo(({ plate }: Props) => {
	const { createdAt, description, id, inDiet, name } = plate

	return (
		<Accordion collapsible type='single'>
			<AccordionItem value={id} className='group'>
				<AccordionTrigger className='py-[14px] px-4 flex justify-between items-center border-[1px] border-gray-300 rounded-md cursor-pointer'>
					<div className='gap-[10px] flex justify-between items-center'>
						<span>
							{dateFns.formatAsHours(createdAt)}
						</span>

						<hr className='w-[1px] h-[14px] bg-gray-400' />

						<h4 className='max-w-44 truncate'>
							{name}
						</h4>
					</div>

					<div
						className={clsx(
							'size-[14px] rounded-full',
							inDiet ? 'bg-emerald-100' : 'bg-rose-100'
						)}
					/>
				</AccordionTrigger>

				<AccordionContent className='gap-6 flex-1 flex flex-col justify-between group-data-[state=open]:p-4'>
					<div className='gap-6 grid text-primary'>
						<div className='gap-2 grid'>
							<h1 className='text-xl font-bold'>
								{name}
							</h1>

							{description && (
								<p className='text-base'>
									{description}
								</p>
							)}
						</div>

						<div className='gap-2 grid'>
							<h3 className='text-sm font-bold'>
								Data e hora
							</h3>

							<p className='text-base'>
								{dateFns.formatAsDateAndAtHours(createdAt)}
							</p>
						</div>

						<div className='py-2 px-4 gap-2 flex items-center justify-self-start rounded-full'>
							<div
								className={clsx(
									'size-2 rounded-full',
									inDiet ? 'bg-emerald-500' : 'bg-rose-500'
								)}
							/>

							<span className='text-sm text-primary'>
								{inDiet ? 'dentro da dieta' : 'fora da dieta' }
							</span>
						</div>
					</div>

					<div className='gap-2 flex flex-wrap justify-center'>
						<UpdatePlate plate={plate} />
						<DeletePlate id={id} />
					</div>
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	)
})
