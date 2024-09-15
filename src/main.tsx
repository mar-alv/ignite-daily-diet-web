import './global.css'

import { QueryClient, QueryClientProvider } from 'react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'

import { Toaster } from '@/components/ui/toaster'

import { App } from './app.tsx'
import { enableMsw } from './api/mocks'

const queryClient = new QueryClient()

enableMsw().then(() => {
	ReactDOM.createRoot(document.getElementById('root')!).render(
		<React.StrictMode>
			<QueryClientProvider client={queryClient}>
				<App />
        <Toaster />
			</QueryClientProvider>
		</React.StrictMode>
	)
})
