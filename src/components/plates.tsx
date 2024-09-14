import { CaretDown } from '@phosphor-icons/react'

import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from 'react-loading-skeleton'

import { useQuery } from 'react-query'

import { getPlates } from '@/api/plates'

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from '@/components/ui/accordion'
import { Plate } from '@/components/plate'

import { Plate as IPlate } from '@/interfaces'

import { dayjs } from '@/lib/dayjs'

export function Plates() {
	const { data } = useQuery('getPlates', getPlates, {
		cacheTime: Infinity,
		staleTime: Infinity,
		suspense: true
	})

	if (!data) return <PlatesSkeleton />

	const { plates } = data

	return (
		<section className='mt-8 gap-8 grid'>
			{Object.keys(plates).map((date, index) => (
				<Accordion key={index} type='multiple' defaultValue={index === 0 ? [date] : ['']}>
					<AccordionItem value={date}>
						<AccordionTrigger className='w-full px-6 flex justify-between items-center group'>
							<h4 className='text-lg text-gray-100'>
								{dayjs.getDateAsDDMMYY(date)}
							</h4>
							<CaretDown
								className='transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-180'
							/>
						</AccordionTrigger>

						<AccordionContent className='mt-[14px] gap-2 grid'>
							{plates[date].map((plate: IPlate) =>
								<Plate key={plate.id} plate={plate} />
							)}
						</AccordionContent>
					</AccordionItem>
				</Accordion>
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
