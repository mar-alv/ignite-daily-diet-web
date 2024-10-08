import { CaretDown } from '@phosphor-icons/react'

import { useQuery } from 'react-query'

import { getPlates } from '@/api/plates'

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from '@/components/ui/accordion'
import { Plate } from '@/components/plate'
import { Skeleton } from '@/components/ui/skeleton'

import { useToast } from '@/hooks/use-toast'

import { Plate as IPlate } from '@/interfaces'

import { dateFns } from '@/lib/date-fns'

export function Plates() {
  const { toast } = useToast()

	const { data } = useQuery('getPlates', getPlates, {
		cacheTime: Infinity,
		staleTime: Infinity,
		suspense: true,
		onError(e: Error) {
			toast({
				title: e?.message,
				variant: 'error'
			})
		}
	})

	if (!data) return <PlatesSkeleton />

	const { plates } = data

	return (
		<section className='mt-8 gap-8 grid'>
			{Object.keys(plates).map((date, index) => (
				<Accordion key={index} type='multiple' defaultValue={index === 0 ? [date] : ['']}>
					<AccordionItem value={date}>
						<AccordionTrigger className='w-full px-6 flex justify-between items-center rounded-md group'>
							<h4 className='text-lg text-primary'>
								{dateFns.formatAsDayMonthYearSeparatedByDots(new Date(date))}
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
			<Skeleton className='w-[72px] h-6' />

			<div className='mt-[14px] gap-2 grid'>
				{Array.from({ length: 4 }).map((_, index) => (
					<Skeleton key={index} className='h-[84px]' />
				))}
			</div>
		</section>
	)
}
