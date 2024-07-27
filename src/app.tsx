import { Suspense } from 'react'
import { useQuery } from 'react-query'

import { getUserMetrics } from './api/users'

import { Header } from './components/header'

function Teste() {
	const { data } = useQuery('getUserMetrics', getUserMetrics, { suspense: true })

	return (
		<div>
			<p>teste</p>
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</div>
	)
}

export function App() {
  return (
		<div className='p-6'>
			<Header />

			<Suspense fallback={(<p>carregando...</p>)}>
				<Teste />
			</Suspense>
		</div>
	)
}
