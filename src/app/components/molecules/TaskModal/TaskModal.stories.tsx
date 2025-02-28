import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import TaskModal, { TaskModalProps } from './TaskModal'

const meta: Meta<TaskModalProps> = {
  title: 'Molecules/TaskModal',
  component: TaskModal,
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'Controls whether the modal is opened',
      defaultValue: true,
    },
    onClose: {
      action: 'close',
      description: 'Function to call when the modal is closed',
    },
    taskText: {
      control: 'text',
      description: 'Content of the task',
      defaultValue: 'This is a task',
    },
    setTaskText: {
      action: 'setTaskText',
      description: 'Function to set the task text',
    },
    onSave: {
      action: 'onSave',
      description: 'Function to save the task',
    },
    isEditing: {
      control: 'boolean',
      description: 'Indicates if the task is being edited',
      defaultValue: false,
    },
  },
  tags: ['autodocs'],
}

export default meta

const Template: StoryFn<TaskModalProps> = (args) => <TaskModal {...args} />

export const DefaultVariant = Template.bind({})
DefaultVariant.args = {
  isOpen: true,
  taskText: 'This is a task',
  isEditing: false,
}
