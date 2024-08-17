import * as Dialog from '@radix-ui/react-dialog'

import { Meta, StoryObj } from '@storybook/react'

import { PlateCreatedModal } from '@/components'

const meta: Meta<typeof PlateCreatedModal> = {
  title: 'components/plate created modal',
  component: PlateCreatedModal,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
			<Dialog.Root open>
				<Dialog.Portal>
					<Story />
				</Dialog.Portal>
			</Dialog.Root>
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
