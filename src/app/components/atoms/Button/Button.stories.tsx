import type { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Button from './Button'

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    backgroundColor: {
      control: { type: 'color' },
      description: 'The background color of the button',
    },
    label: {
      control: { type: 'text' },
      description: 'The label of the button',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'The disabled state of the button',
    },
    dir: {
      control: 'select',
      options: ['ltr', 'rtl'],
      description: 'The direction of the button',
    },
    onClick: {
      action: 'clicked',
      description: 'The action to be performed when the button is clicked',
    },
  },
  title: 'Atoms/Button',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  args: { onClick: action('clicked') },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: 'Task',
    backgroundColor: 'bg-green-500',
  },
}

export const Secondary: Story = {
  args: {
    label: 'Task',
    backgroundColor: 'bg-gray-500',
  },
}

export const CustomColor: Story = {
  args: {
    label: 'Task',
    backgroundColor: 'bg-gray-700',
    className: 'text-black',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Task',
    disabled: true,
    backgroundColor: 'bg-green-500',
  },
}

export const EditTask: Story = {
  args: {
    label: 'Edit Task',
    backgroundColor: 'bg-yellow-500',
  },
}

export const DeleteTask: Story = {
  args: {
    label: 'Delete Task',
    backgroundColor: 'bg-red-500',
  },
}
