import { delay, http, HttpResponse } from 'msw'
import { Meta, StoryObj } from '@storybook/react'

import { QueryClient, QueryClientProvider } from 'react-query'

import { DeletePlateButton } from '@/components'

const queryClient = new QueryClient()

const meta: Meta<typeof DeletePlateButton> = {
  title: 'components/delete plate button',
  component: DeletePlateButton,
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
				http.delete('http://localhost:3001/users/:userId/plates/:plateId', async () => {
					await delay(2000)

					return HttpResponse.json()
				})
			]
		}
	}
}
