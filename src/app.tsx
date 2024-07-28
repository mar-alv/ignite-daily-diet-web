
import { Suspense } from 'react'

import { DietPercentage, DietPercentageSkeleton, Header } from './components'

export function App() {
  return (
		<div className='p-6'>
			<Header />

			<Suspense fallback={<DietPercentageSkeleton />}>
				<DietPercentage />
			</Suspense>
		</div>
	)
}
