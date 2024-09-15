import { ErrorBoundary } from 'react-error-boundary'
import { useQueryErrorResetBoundary } from 'react-query'
import { Suspense } from 'react'

import { CreatePlate } from '@/components/create-plate'
import { Header } from '@/components/header'
import { Metrics,	MetricsSkeleton } from '@/components/metrics'
import { Plates, PlatesSkeleton } from '@/components/plates'

export function App() {
  const { reset } = useQueryErrorResetBoundary()

  return (
		<div className='p-6'>
			<Header />

			<main className='grid gap-10'>
				<ErrorBoundary
					onReset={reset}
					fallbackRender={() => (
						<MetricsSkeleton />
					)}
				>
					<Suspense fallback={<MetricsSkeleton />}>
						<Metrics />
					</Suspense>
				</ErrorBoundary>

				<CreatePlate />

				<ErrorBoundary
					onReset={reset}
					fallbackRender={() => (
						<PlatesSkeleton />
					)}
				>
					<Suspense fallback={<PlatesSkeleton />}>
						<Plates />
					</Suspense>
				</ErrorBoundary>
			</main>
		</div>
	)
}
