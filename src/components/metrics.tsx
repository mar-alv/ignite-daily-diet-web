import clsx from 'clsx'

import { useQuery } from 'react-query'

import { getMetrics } from '@/api/users'

import { Skeleton } from '@/components/ui/skeleton'
import { toastify } from '@/lib/toastify'

export function Metrics() {
	const { data } = useQuery('getMetrics', getMetrics, {
		cacheTime: Infinity,
		staleTime: Infinity,
		suspense: true,
		onError(e: Error) {
			toastify.errorToast(e?.message)
		}
	})

	if (!data) return <MetricsSkeleton />

	const { bestDietSequence, dietPercentage, platesAmount, platesOnDiet, platesOutOfDiet } = data

	return (
		<section className='mt-8 gap-3 flex flex-wrap justify-between text-center text-primary'>
			<article
				className={clsx(
					'p-4 flex-1 flex flex-col justify-center rounded-lg',
					dietPercentage < 50 ? 'bg-rose-100' : 'bg-emerald-100'
				)}
			>
				<h1 className='text-[2rem] font-bold'>
					{dietPercentage}%
				</h1>

				<p className='text-sm'>
					das refeições dentro da dieta
				</p>
			</article>

			<article className='gap-3 grid flex-1'>
				<div className='p-4 rounded-lg text-primary bg-gray-200'>
					<h3 className='text-2xl'>
						{bestDietSequence}
					</h3>

					<p className='text-sm'>
						melhor sequência de pratos dentro da dieta
					</p>
				</div>

				<div className='p-4 rounded-lg  text-primary bg-gray-200'>
					<h3 className='text-2xl'>
						{platesAmount}
					</h3>

					<p className='text-sm'>
						refeições registradas
					</p>
				</div>
			</article>

			<article  className='gap-3 grid flex-1'>
				<div className='p-4 rounded-lg bg-emerald-100'>
					<h3 className='text-2xl'>
						{platesOnDiet}
					</h3>

					<p className='text-sm'>
						refeições dentro da dieta
					</p>
				</div>

				<div className='p-4 rounded-lg bg-rose-100'>
					<h3 className='text-2xl'>
						{platesOutOfDiet}
					</h3>

					<p className='text-sm'>
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
				<Skeleton className='h-[180px] rounded-lg bg-emerald-200' />
			</article>

			<article className='gap-3 grid flex-1'>
				<Skeleton className='h-[84px] rounded-lg' />
				<Skeleton className='h-[84px] rounded-lg' />
			</article>

			<article  className='gap-3 grid flex-1'>
				<Skeleton className='h-[84px] rounded-lg bg-emerald-200' />
				<Skeleton className='h-[84px] rounded-lg bg-rose-200' />
			</article>
		</section>
	)
}
