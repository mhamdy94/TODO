import React, { useCallback } from 'react'
import Button from '@/app/components/atoms/Button'
import Checkbox from '@/app/components/atoms/CheckBox'

type Task = {
  id: string
  text: string
  completed: boolean
  deleted: boolean
}

type TaskItemProps = {
  task: Task
  toggleCompletion: (id: string) => void
  deleteTask: (id: string) => void
  openEditModal: (task: { id: string; text: string }) => void
}

const TaskActions: React.FC<{
  task: Task
  onEdit: () => void
  onDelete: () => void
}> = ({ task, onEdit, onDelete }) => (
  <div className="space-x-2 flex">
    <Button onClick={onEdit} aria-label={`Edit task: ${task.text}`}>
      Edit
    </Button>
    <Button
      onClick={onDelete}
      variant="destructive"
      aria-label={`Delete task: ${task.text}`}
    >
      Delete
    </Button>
  </div>
)

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  toggleCompletion,
  deleteTask,
  openEditModal,
}) => {
  const handleToggleCompletion = useCallback(
    () => toggleCompletion(task.id),
    [task.id, toggleCompletion],
  )
  const handleEdit = useCallback(
    () => openEditModal(task),
    [task, openEditModal],
  )
  const handleDelete = useCallback(
    () => deleteTask(task.id),
    [task.id, deleteTask],
  )

  return (
    <div className="flex justify-between items-center p-4 bg-white shadow rounded">
      <div className="flex items-center gap-2">
        <Checkbox checked={task.completed} onChange={handleToggleCompletion} />
        <span
          className={`cursor-pointer ${task.completed ? 'line-through text-gray-500' : 'text-black'}`}
          role="button"
          onClick={handleToggleCompletion}
          aria-label={`Mark task as ${task.completed ? 'incomplete' : 'complete'}`}
        >
          {task.text}
        </span>
      </div>
      <TaskActions task={task} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  )
}

export default TaskItem
