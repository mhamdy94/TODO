import React, { useMemo } from 'react'
import TaskItem from '@/app/components/molecules/TaskItem'

type Task = {
  id: string
  text: string
  completed: boolean
  deleted: boolean
}

type TaskListProps = {
  tasks: Task[]
  toggleCompletion: (id: string) => void
  deleteTask: (id: string) => void
  editTask: (task: { id: string; text: string }) => void
}
const NoTasksMessage: React.FC = () => (
  <p className="flex justify-center w-full p-4" aria-live="polite">
    No tasks available
  </p>
)

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  toggleCompletion,
  deleteTask,
  editTask,
}) => {
  const renderedTasks = useMemo(
    () =>
      tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleCompletion={toggleCompletion}
          deleteTask={deleteTask}
          openEditModal={editTask}
        />
      )),
    [tasks, toggleCompletion, deleteTask, editTask],
  )

  return (
    <div className="gap-4">
      {tasks.length === 0 ? <NoTasksMessage /> : renderedTasks}
    </div>
  )
}

export default TaskList
