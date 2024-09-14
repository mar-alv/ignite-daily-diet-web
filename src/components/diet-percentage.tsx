import clsx from 'clsx'

import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from 'react-loading-skeleton'

import { useQuery } from 'react-query'

import { getMetrics } from '@/api/users'

// TODO: Rename to metrics
// TODO: do this on update and delete plate: queryClient.invalidateQueries('getMetrics')
export function DietPercentage() {
	const { data } = useQuery('getMetrics', getMetrics, {
		cacheTime: Infinity,
		staleTime: Infinity,
		suspense: true
	})

	if (!data) return <DietPercentageSkeleton />

	const { bestDietSequence, dietPercentage, platesAmount, platesOnDiet, platesOutOfDiet } = data

	return (
		<section className='mt-8 gap-3 flex flex-wrap justify-between text-center'>
			<article
				className={clsx(
					'p-4 flex-1 flex flex-col justify-center rounded-lg',
					dietPercentage < 50 ? 'bg-red-light' : 'bg-green-light'
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
				<div className='p-4 rounded-lg bg-green-light'>
					<h3 className='text-2xl text-gray-100'>
						{platesOnDiet}
					</h3>

					<p className='text-sm text-gray-200'>
						refeições dentro da dieta
					</p>
				</div>

				<div className='p-4 rounded-lg bg-red-light'>
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

export function DietPercentageSkeleton() {
	return (
		<section className='mt-8 gap-3 flex flex-wrap justify-between text-center'>
			<article className='flex-1'>
				<Skeleton height={180} baseColor='#e5f0db' highlightColor='#cbe4b4' className='rounded-lg' />
			</article>

			<article className='gap-3 grid flex-1'>
				<Skeleton height={84} className='rounded-lg'/>
				<Skeleton height={84} className='rounded-lg'/>
			</article>

			<article  className='gap-3 grid flex-1'>
				<Skeleton height={84} baseColor='#e5f0db' highlightColor='#cbe4b4' className='rounded-lg' />
				<Skeleton height={84} baseColor='#f4e6e7' highlightColor='#bf3b44' className='rounded-lg' />
			</article>
		</section>
	)
}
