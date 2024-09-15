import { delay, http, HttpResponse } from 'msw'

import { Meta, StoryObj } from '@storybook/react'

import { QueryClient, QueryClientProvider } from 'react-query'

import { DeletePlate } from '@/components/delete-plate'
import { Toaster } from '@/components/ui/toaster'

import { env } from '@/env'

const queryClient = new QueryClient()

const meta: Meta<typeof DeletePlate> = {
  title: 'components/delete plate',
  component: DeletePlate,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <Story />
        <Toaster />
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
				http.delete(`${env.VITE_API_BASE_URL}/:userId/plates/:plateId`, async () => {
					await delay(2000)

					return HttpResponse.json()
				})
			]
		}
	}
}
