import * as Dialog from '@radix-ui/react-dialog'
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from 'react-loading-skeleton'
import { useQuery } from 'react-query'

import { getUserMetrics } from '../api/users'
import { ArrowLeft, ArrowUpRight } from '@phosphor-icons/react'

export function DietPercentage() {
	const { data } = useQuery('getUserMetrics', getUserMetrics, { suspense: true })

	if (!data) return

	const { bestDietSequence, dietPercentage, platesAmount, platesOnDiet, platesOutOfDiet } = data

	return (
		<Dialog.Root>
			<section className='mt-8 px-4 py-5 grid rounded-lg bg-green-light'>
				<Dialog.Trigger asChild>
					<ArrowUpRight className='size-6 justify-self-end cursor-pointer text-green-dark' />
				</Dialog.Trigger>

				<div className='text-center'>
					<h1 className='text-[2rem] font-bold text-gray-100'>
						{dietPercentage}%
					</h1>

					<p className='text-sm text-gray-200'>
						das refeições dentro da dieta
					</p>
				</div>
			</section>

			<Dialog.Portal>
				<Dialog.Content aria-describedby={undefined} className='fixed inset-0 bg-green-light'>
					<Dialog.Title className='sr-only'>
						Métricas da sua dieta
					</Dialog.Title>

					<section className='grid text-center rounded-lg px-4 py-5 mt-8'>
						<Dialog.Close className='justify-self-start'>
							<ArrowLeft className='size-6 text-green-dark' />
						</Dialog.Close>

						<h1 className='text-gray-100 text-[2rem] font-bold'>
							{dietPercentage}%
						</h1>

						<p className='text-gray-200 text-sm'>
							das refeições dentro da dieta
						</p>
					</section>

					<section className='h-full p-6 rounded-s-2xl rounded-e-2xl text-center bg-gray-700'>
						<h2 className='text-sm text-gray-100'>
							Estatísticas gerais
						</h2>

						<div className='mt-6 grid grid-cols-2 grid-rows-4 gap-3'>
							<div className='p-4 col-span-2 rounded-lg bg-gray-600'>
								<h3 className='text-2xl text-gray-100'>
									{bestDietSequence}
								</h3>

								<p className='text-sm text-gray-200'>
									melhor sequência de pratos dentro da dieta
								</p>
							</div>

							<div className='p-4 col-span-2 rounded-lg bg-gray-600'>
								<h3 className='text-2xl text-gray-100'>
									{platesAmount}
								</h3>

								<p className='text-sm text-gray-200'>
									refeições registradas
								</p>
							</div>

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
						</div>
					</section>
				</Dialog.Content>
    	</Dialog.Portal>
		</Dialog.Root>
	)
}

export function DietPercentageSkeleton() {
	return (
		<Skeleton className='w-[327px] h-[102px] mt-8' baseColor='#e5f0db' highlightColor='#cbe4b4' />
	)
}
