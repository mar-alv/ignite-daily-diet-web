import { delay, http, HttpResponse } from 'msw'

import type { Meta, StoryObj } from '@storybook/react'

import { QueryClient, QueryClientProvider } from 'react-query'

import { CreatePlate } from '@/components/create-plate'

import { env } from '@/env'

const queryClient = new QueryClient()

const meta: Meta<typeof CreatePlate> = {
  title: 'components/create plate',
  component: CreatePlate,
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

export const Primary: Story = {
	parameters: {
		msw: {
			handlers: [
				http.post(`${env.VITE_API_BASE_URL}/:userId/plates`, async () => {
					await delay(2000)

					return HttpResponse.json({
						plateId: '54eed103-f6a5-49a4-9bed-93d2021632ed'
					})
				})
			]
		}
	}
}
