import { Suspense } from 'react'

import { DietPercentage, Header } from './components'

export function App() {
  return (
		<div className='p-6'>
			<Header />

			<Suspense fallback={(<p>carregando...</p>)}>
				<DietPercentage />
			</Suspense>
		</div>
	)
}
