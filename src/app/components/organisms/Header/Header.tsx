import React, { useMemo } from 'react'
import Button from '@/app/components/atoms/Button'

type HeaderProps = {
  addTask: () => void
  uncompletedCount: number
  completedCount: number
  deletedCount: number
}
const TaskStats: React.FC<{
  uncompletedCount: number
  completedCount: number
  deletedCount: number
}> = ({ uncompletedCount, completedCount, deletedCount }) => {
  const stats = useMemo(
    () => [
      { icon: '📋', label: 'Uncompleted', count: uncompletedCount },
      { icon: '✅', label: 'Completed', count: completedCount },
      { icon: '🗑️', label: 'Deleted', count: deletedCount },
    ],
    [uncompletedCount, completedCount, deletedCount],
  )

  return (
    <div className="space-x-4 flex items-center">
      {stats.map(({ icon, label, count }) => (
        <span
          key={label}
          className="flex items-center gap-1"
          aria-label={`${count} ${label}`}
        >
          {icon} {count} {label}
        </span>
      ))}
    </div>
  )
}

const Header: React.FC<HeaderProps> = ({
  addTask,
  uncompletedCount,
  completedCount,
  deletedCount,
}) => {
  return (
    <header className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold">Todo List</h1>
      <div className="flex items-center gap-4">
        <TaskStats
          uncompletedCount={uncompletedCount}
          completedCount={completedCount}
          deletedCount={deletedCount}
        />
        <Button onClick={addTask}>Add Task</Button>
      </div>
    </header>
  )
}

export default Header
