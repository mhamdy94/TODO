import React from 'react'
import Input from '@/app/components/atoms/Input'
import Button from '@/app/components/atoms/Button'

export type TaskModalProps = {
  isOpen: boolean
  onClose: () => void
  taskText: string
  setTaskText: (text: string) => void
  onSave: () => void
  isEditing: boolean
}

const TaskModal: React.FC<TaskModalProps> = ({
  isOpen,
  onClose,
  taskText,
  setTaskText,
  onSave,
  isEditing,
}) => {
  if (!isOpen) return null
  return (
    <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-lg font-bold mb-4">
          {isEditing ? 'Edit Task' : 'Add Task'}
        </h2>
        <Input
          value={taskText}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTaskText(e.target.value)
          }
          placeholder="Enter task..."
        />
        <div className="flex justify-end gap-2 mt-4">
          <Button onClick={onSave}>Save</Button>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  )
}

export default TaskModal
