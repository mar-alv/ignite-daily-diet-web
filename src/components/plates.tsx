import * as Accordion from '@radix-ui/react-accordion'

import { CaretDown } from '@phosphor-icons/react'
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from 'react-loading-skeleton'

import { useQuery } from 'react-query'

import { dayjs } from '@/lib'
import { getPlates } from '@/api'
import { Plate } from '@/components'
import { Plate as IPlate } from '@/interfaces'

// TODO: create stories
export function Plates() {
	const { data } = useQuery('getPlates', getPlates, { suspense: true })

	if (!data) return

	const { plates } = data

	return (
		<section className='mt-8 gap-8 grid'>
			{Object.keys(plates).map((date, index) => (
				<Accordion.Root key={index} type='multiple' defaultValue={index === 0 ? [date] : ['']}>
					<Accordion.Item value={date}>
						<Accordion.Header>
							<Accordion.Trigger className='w-full flex justify-between items-center group'>
								<h4 className='text-lg text-gray-100'>
									{dayjs.getDateAsDDMMYY(date)}
								</h4>
								<CaretDown
									className='transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-180'
								/>
							</Accordion.Trigger>
						</Accordion.Header>
						<Accordion.Content className='mt-[14px] gap-2 grid'>
							{plates[date].map((plate: IPlate) =>
								<Plate key={plate.id} plate={plate} />
							)}
						</Accordion.Content>
					</Accordion.Item>
				</Accordion.Root>
			))}
		</section>
	)
}

export function PlatesSkeleton() {
	return (
		<section className='mt-8'>
			<Skeleton width={72} height={24} />

			<div className='mt-[14px] gap-2 grid'>
				<Skeleton count={4} height={48} />
			</div>
		</section>
	)
}
