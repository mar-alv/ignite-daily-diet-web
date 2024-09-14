import { Meta, StoryObj } from '@storybook/react'

import { Dialog, DialogPortal } from '@/components/ui/dialog'
import { PlateCreatedModal } from '@/components/plate-created-modal'

const meta: Meta<typeof PlateCreatedModal> = {
  title: 'components/plate created modal',
  component: PlateCreatedModal,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
			<Dialog open>
				<DialogPortal>
					<Story />
				</DialogPortal>
			</Dialog>
    )
  ]
}

export default meta

type Story = StoryObj<typeof meta>

export const InDiet: Story = {
	args: {
		stayedInDiet: true
	}
}

export const OutOfDiet: Story = {
	args: {
		stayedInDiet: false
	}
}
