import React from 'react'
import TaskItem from '@/app/components/molecules/TaskItem'

type TaskListProps = {
  tasks: { id: string; text: string; completed: boolean; deleted: boolean }[]
  toggleCompletion: (id: string) => void
  deleteTask: (id: string) => void
  editTask: (task: { id: string; text: string }) => void
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  toggleCompletion,
  deleteTask,
  editTask,
}) => {
  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleCompletion={toggleCompletion}
          deleteTask={deleteTask}
          openEditModal={(task) => editTask({ id: task.id, text: task.text })}
        />
      ))}
    </div>
  )
}

export default TaskList
