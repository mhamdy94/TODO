import React from 'react'
import Button from '@/app/components/atoms/Button'

type HeaderProps = {
  addTask: () => void
  uncompletedCount: number
  completedCount: number
  deletedCount: number
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
      <div className="space-x-4">
        <span>📋 {uncompletedCount} Uncompleted</span>
        <span>✅ {completedCount} Completed</span>
        <span>🗑️ {deletedCount} Deleted</span>
        <Button onClick={addTask}>Add Task</Button>
      </div>
    </header>
  )
}

export default Header
