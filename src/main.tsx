import './global.css'

import { QueryClient, QueryClientProvider } from 'react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './app.tsx'
import { enableMsw } from './api/mocks'

import { ThemeProvider } from '@/components/theme-provider'

const queryClient = new QueryClient()

enableMsw().then(() => {
	ReactDOM.createRoot(document.getElementById('root')!).render(
		<React.StrictMode>
			<QueryClientProvider client={queryClient}>
				<ThemeProvider storageKey="ignite-daily-diet-ui-theme">
					<App />
				</ThemeProvider>
			</QueryClientProvider>
		</React.StrictMode>
	)
})
