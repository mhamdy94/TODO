import type { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Input from './Input'

const meta: Meta<typeof Input> = {
  component: Input,
  argTypes: {
    value: {
      control: { type: 'text' },
      description: 'The value of the input',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'The placeholder text of the input',
    },
    onChange: {
      action: 'changed',
      description: 'The action to be performed when the input value is changed',
    },
  },
  title: 'Atoms/Input',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  args: { onChange: action('changed') },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: '',
    placeholder: 'Enter text...',
  },
}

export const WithValue: Story = {
  args: {
    value: 'Sample text',
    placeholder: 'Enter text...',
  },
}

export const WithPlaceholder: Story = {
  args: {
    value: '',
    placeholder: 'Placeholder text',
  },
}
