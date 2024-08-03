import { http, HttpResponse } from 'msw'
import type { Meta, StoryObj } from '@storybook/react'

import { CreatePlate } from '../components'

const meta = {
  title: 'components/create plate',
  component: CreatePlate,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta<typeof CreatePlate>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
	parameters: {
		msw: {
			handlers: [
				http.post('http://localhost:3001/users/:userId/plates', async () => {
				  await new Promise((resolve) => setTimeout(resolve, 2000))

					return HttpResponse.json({
						plateId: '54eed103-f6a5-49a4-9bed-93d2021632ed'
					})
				})
			]
		}
	}
}
