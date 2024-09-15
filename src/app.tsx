import { Suspense } from 'react'

import { CreatePlate } from '@/components/create-plate'
import { Header } from '@/components/header'
import { Metrics,	MetricsSkeleton } from '@/components/metrics'
import { Plates, PlatesSkeleton } from '@/components/plates'

export function App() {

  return (
		<div className='p-6'>
			<Header />

			<main className='grid gap-10'>
				<Suspense fallback={<MetricsSkeleton />}>
					<Metrics />
				</Suspense>

				<CreatePlate />

				<Suspense fallback={<PlatesSkeleton />}>
					<Plates />
				</Suspense>
			</main>
		</div>
	)
}
