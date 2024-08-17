import { Suspense } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import {
	CreatePlate,
	DietPercentage,
	DietPercentageSkeleton,
	Header,
	Plates,
	PlatesSkeleton
} from '@/components'

export function App() {
  return (
		<div className='p-6'>
			<Header />

			<main className='grid gap-10'>
				<Suspense fallback={<DietPercentageSkeleton />}>
					<DietPercentage />
				</Suspense>

				<CreatePlate />

				<Suspense fallback={<PlatesSkeleton />}>
					<Plates />
				</Suspense>

				<ToastContainer position='bottom-right' />
			</main>
		</div>
	)
}
