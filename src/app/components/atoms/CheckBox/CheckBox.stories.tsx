import type { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Checkbox from './CheckBox'

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  argTypes: {
    checked: {
      control: { type: 'boolean' },
      description: 'The checked state of the checkbox',
    },
    onChange: {
      action: 'changed',
      description: 'The action to be performed when the checkbox is changed',
    },
  },
  title: 'Atoms/Checkbox',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  args: { onChange: action('changed') },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Checked: Story = {
  args: {
    checked: true,
  },
}

export const Unchecked: Story = {
  args: {
    checked: false,
  },
}
