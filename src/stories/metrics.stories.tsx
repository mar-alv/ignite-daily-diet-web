import { delay, http, HttpResponse } from 'msw'

import { Meta, StoryObj } from '@storybook/react'

import { QueryClient, QueryClientProvider } from 'react-query'
import { Suspense } from 'react'

import { Metrics, MetricsSkeleton } from '@/components/metrics'
import { Toaster } from '@/components/ui/toaster'

import { env } from '@/env'

const queryClient = new QueryClient()

const meta: Meta<typeof Metrics> = {
  title: 'components/metrics',
  component: Metrics,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<MetricsSkeleton />}>
          <Story />
        	<Toaster />
        </Suspense>
      </QueryClientProvider>
    )
  ]
}

export default meta

type Story = StoryObj<typeof meta>

export const InDiet: Story = {
	parameters: {
		msw: {
			handlers: [
				http.get(`${env.VITE_API_BASE_URL}/:userId/metrics`, async () => {
					await delay(2000)

					return HttpResponse.json({
						bestDietSequence: 1,
						dietPercentage: 50,
						platesAmount: 2,
						platesOnDiet: 1,
						platesOutOfDiet: 1
					})
				})
			]
		}
	}
}

export const outOfDiet: Story = {
	parameters: {
		msw: {
			handlers: [
				http.get(`${env.VITE_API_BASE_URL}/:userId/metrics`, async () => {
				  await new Promise((resolve) => setTimeout(resolve, 2000))

					return HttpResponse.json({
						bestDietSequence: 0,
						dietPercentage: 0,
						platesAmount: 1,
						platesOnDiet: 0,
						platesOutOfDiet: 1
					})
				})
			]
		}
	}
}

// TODO: make error story to keep seing the skeleton and toast
