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
    <div className="gap-4">
      {tasks.length === 0 ? (
        <p className="flex justify-center w-full p-4">No tasks available</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            toggleCompletion={toggleCompletion}
            deleteTask={deleteTask}
            openEditModal={editTask}
          />
        ))
      )}
    </div>
  )
}

export default TaskList
