import type { Meta, StoryObj } from '@storybook/react'

import { Header } from '@/components'

const meta = {
  title: 'components/header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  }
} satisfies Meta<typeof Header>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {}
