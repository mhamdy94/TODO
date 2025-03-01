import * as React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import TextArea, { TextAreaProps } from './TextArea'

export default {
  title: 'Atoms/TextArea',
  component: TextArea,
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the textarea',
    },
    rows: {
      control: 'number',
      description: 'Number of rows for the textarea',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes for styling',
    },
    bgColor: {
      options: ['white', 'secondary'],
      control: 'select',
      description: 'Background color of the textarea',
      defaultValue: 'white',
    },
  },
  tags: ['autodocs'],
} as Meta<typeof TextArea>

const Template: StoryFn<TextAreaProps> = (args) => <TextArea {...args} />

export const Default = Template.bind({})
Default.args = {
  placeholder: 'Enter text',
  rows: 3,
  bgColor: 'white',
}

export const WithCustomClass = Template.bind({})
WithCustomClass.args = {
  placeholder: 'Custom class example',
  rows: 3,
  className: 'max-w-[500px]',
  bgColor: 'secondary',
}
