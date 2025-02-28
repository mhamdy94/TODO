import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import TextArea from '@/app/components/atoms/TextArea'
import Button from '@/app/components/atoms/Button'

const schema = z.object({
  taskText: z.string().min(1, 'Task text is required'),
})

type TaskFormValues = {
  taskText: string
}

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
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TaskFormValues>({
    resolver: zodResolver(schema),
    defaultValues: { taskText },
    mode: 'onChange',
  })

  useEffect(() => {
    if (isEditing) {
      reset({ taskText })
    }
  }, [isEditing, taskText, reset])

  const onSubmit = (data: TaskFormValues) => {
    setTaskText(data.taskText)
    onSave()
    if (!isEditing) {
      reset()
    }
  }

  if (!isOpen) return null
  return (
    <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-lg font-bold mb-4">
          {isEditing ? 'Edit Task' : 'Add Task'}
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextArea
            {...register('taskText')}
            placeholder="Enter task..."
            rows={4}
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
          />
          {errors.taskText && (
            <p className="text-red-500 text-sm mt-1">
              {errors.taskText.message}
            </p>
          )}
          <div className="flex justify-end gap-2 mt-4">
            <Button type="submit">Save</Button>
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default TaskModal
