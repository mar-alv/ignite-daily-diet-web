import { delay, http, HttpResponse } from 'msw'
import { Meta, StoryObj } from '@storybook/react'

import { QueryClient, QueryClientProvider } from 'react-query'
import { Suspense } from 'react'

import { DietPercentage, DietPercentageSkeleton } from '@/components'

const queryClient = new QueryClient()

const meta: Meta<typeof DietPercentage> = {
  title: 'components/diet percentage',
  component: DietPercentage,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<DietPercentageSkeleton />}>
          <Story />
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
				http.get('http://localhost:3001/users/:userId/metrics', async () => {
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
				http.get('http://localhost:3001/users/:userId/metrics', async () => {
				  await new Promise((resolve) => setTimeout(resolve, 2000))

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
