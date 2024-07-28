
import { Suspense } from 'react'

import { CreatePlate, DietPercentage, DietPercentageSkeleton, Header } from './components'

export function App() {
  return (
		<div className='p-6'>
			<Header />

			<div className='grid gap-10'>
				<Suspense fallback={<DietPercentageSkeleton />}>
					<DietPercentage />
				</Suspense>

				<CreatePlate />
			</div>
		</div>
	)
}
