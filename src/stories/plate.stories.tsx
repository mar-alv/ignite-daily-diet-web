import { delay, http, HttpResponse } from 'msw'

import { Meta, StoryObj } from '@storybook/react'

import { QueryClient, QueryClientProvider } from 'react-query'

import { Plate } from '@/components/plate'

import { env } from '@/env'

const queryClient = new QueryClient()

const meta: Meta<typeof Plate> = {
  title: 'components/plate',
  component: Plate,
  tags: ['autodocs'],
	decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    )
  ]
}

export default meta

type Story = StoryObj<typeof meta>

export const inDiet: Story = {
	args: {
		plate: {
			id: 'dd17f272-cbc2-47ca-8dec-611ceb4b1fcd',
			name: 'Salada Natural Fresca',
			description: 'Uma leve e refrescante salada com uma variedade de verdes, perfeita para uma refeição saudável.',
			inDiet: true,
			createdAt: '2024-08-06T15:37:10.999Z'
		}
	},
	parameters: {
		msw: {
			handlers: [
				http.put(`${env.VITE_API_BASE_URL}/:userId/plates/:plateId`, async () => {
					await delay(2000)

					return HttpResponse.json()
				}),
				http.delete(`${env.VITE_API_BASE_URL}/:userId/plates/:plateId`, async () => {
					await delay(2000)

					return HttpResponse.json()
				})
			]
		}
	}
}

export const outOfDiet: Story = {
	args: {
		plate: {
			id: 'dd17f272-cbc2-47ca-8dec-611ceb4b1fcd',
			name: 'X-tudo',
			description: 'Maior e mais gostoso da região pra saciar o apetite pelo resto do dia.',
			inDiet: false,
			createdAt: '2024-08-06T15:37:10.999Z'
		}
	},
	parameters: {
		msw: {
			handlers: [
				http.put(`${env.VITE_API_BASE_URL}/:userId/plates/:plateId`, async () => {
					await delay(2000)

					return HttpResponse.json()
				}),
				http.delete(`${env.VITE_API_BASE_URL}/:userId/plates/:plateId`, async () => {
					await delay(2000)

					return HttpResponse.json()
				})
			]
		}
	}
}
