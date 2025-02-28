import React from 'react'
import Button from '@/app/components/atoms/Button'
import Checkbox from '../../atoms/CheckBox'

type TaskItemProps = {
  task: {
    id: string
    text: string
    completed: boolean
    deleted: boolean
  }
  toggleCompletion: (id: string) => void
  deleteTask: (id: string) => void
  openEditModal: (task: { id: string; text: string }) => void
}

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  toggleCompletion,
  deleteTask,
  openEditModal,
}) => {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow rounded">
      <div>
        <Checkbox
          checked={task.completed}
          onChange={() => toggleCompletion(task.id)}
        />
        <span className={task.completed ? 'line-through' : ''}>
          {task.text}
        </span>
      </div>
      <div className="space-x-2">
        <Button onClick={() => openEditModal(task)}>Edit</Button>
        <Button onClick={() => deleteTask(task.id)} variant="outline">
          Delete
        </Button>
      </div>
    </div>
  )
}

export default TaskItem
