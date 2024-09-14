import clsx from 'clsx'

import { useQuery } from 'react-query'

import { getMetrics } from '@/api/users'

import { Skeleton } from '@/components/ui/skeleton'

export function Metrics() {
	const { data } = useQuery('getMetrics', getMetrics, {
		cacheTime: Infinity,
		staleTime: Infinity,
		suspense: true
	})

	if (!data) return <MetricsSkeleton />

	const { bestDietSequence, dietPercentage, platesAmount, platesOnDiet, platesOutOfDiet } = data

	return (
		<section className='mt-8 gap-3 flex flex-wrap justify-between text-center'>
			<article
				className={clsx(
					'p-4 flex-1 flex flex-col justify-center rounded-lg',
					dietPercentage < 50 ? 'bg-red-light dark:bg-red-mid' : 'bg-green-light dark:bg-green-mid'
				)}
			>
				<h1 className='text-[2rem] font-bold text-gray-100'>
					{dietPercentage}%
				</h1>

				<p className='text-sm text-gray-200'>
					das refeições dentro da dieta
				</p>
			</article>

			<article className='gap-3 grid flex-1'>
				<div className='p-4 rounded-lg bg-gray-600'>
					<h3 className='text-2xl text-gray-100'>
						{bestDietSequence}
					</h3>

					<p className='text-sm text-gray-200'>
						melhor sequência de pratos dentro da dieta
					</p>
				</div>

				<div className='p-4 rounded-lg bg-gray-600'>
					<h3 className='text-2xl text-gray-100'>
						{platesAmount}
					</h3>

					<p className='text-sm text-gray-200'>
						refeições registradas
					</p>
				</div>
			</article>

			<article  className='gap-3 grid flex-1'>
				<div className='p-4 rounded-lg bg-green-light dark:bg-green-mid'>
					<h3 className='text-2xl text-gray-100'>
						{platesOnDiet}
					</h3>

					<p className='text-sm text-gray-200'>
						refeições dentro da dieta
					</p>
				</div>

				<div className='p-4 rounded-lg bg-red-light dark:bg-red-mid'>
					<h3 className='text-2xl text-gray-100'>
						{platesOutOfDiet}
					</h3>

					<p className='text-sm text-gray-200'>
						refeições fora da dieta
					</p>
				</div>
			</article>
		</section>
	)
}

export function MetricsSkeleton() {
	return (
		<section className='mt-8 gap-3 flex flex-wrap justify-between text-center'>
			<article className='flex-1'>
				<Skeleton className='h-[180px] rounded-lg bg-green-mid' />
			</article>

			<article className='gap-3 grid flex-1'>
				<Skeleton className='h-[84px] rounded-lg' />
				<Skeleton className='h-[84px] rounded-lg' />
			</article>

			<article  className='gap-3 grid flex-1'>
				<Skeleton className='h-[84px] rounded-lg bg-green-mid' />
				<Skeleton className='h-[84px] rounded-lg bg-red-mid' />
			</article>
		</section>
	)
}
