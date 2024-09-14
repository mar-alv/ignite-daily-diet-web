import { Suspense } from 'react'

import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

import { CreatePlate } from '@/components/create-plate'
import { DietPercentage,	DietPercentageSkeleton } from '@/components/diet-percentage'
import { Header } from '@/components/header'
import { Plates, PlatesSkeleton } from '@/components/plates'

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
