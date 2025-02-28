'use client'
import React, { useState, useCallback, useMemo } from 'react'
import useStore from '@/store/store'
import Header from '@/app/components/organisms/Header'
import TaskList from '@/app/components/organisms/TaskList'
import TaskModal from '@/app/components/molecules/TaskModal'
import CustomPagination from '@/app/components/molecules/Pagination'

const TASKS_PER_PAGE = 3

const TaskPage = () => {
  const tasks = useStore((state) => state.todos)
  const addTask = useStore((state) => state.addTask)
  const updateTask = useStore((state) => state.updateTask)
  const deleteTask = useStore((state) => state.deleteTask)
  const toggleTaskCompletion = useStore((state) => state.toggleTaskCompletion)

  const [isModalOpen, setModalOpen] = useState(false)
  const [currentTask, setCurrentTask] = useState<{
    id: string
    text: string
  } | null>(null)
  const [currentPage, setCurrentPage] = useState(1)

  const handleOpenModal = useCallback(
    (task: { id: string; text: string } | null = null) => {
      setCurrentTask(task)
      setModalOpen(true)
    },
    [],
  )

  const handleSaveTask = useCallback(
    (taskText: string) => {
      if (currentTask) {
        updateTask({ id: currentTask.id, text: taskText })
      } else {
        addTask({
          id: Date.now().toString(),
          text: taskText,
          completed: false,
          deleted: false,
        })
      }
      setModalOpen(false)
    },
    [currentTask, addTask, updateTask],
  )

  const getFilteredTasks = useMemo(() => {
    return tasks.filter((task: { deleted: boolean }) => !task.deleted)
  }, [tasks])

  const currentTasks = useMemo(() => {
    const startIndex = (currentPage - 1) * TASKS_PER_PAGE
    return getFilteredTasks.slice(startIndex, startIndex + TASKS_PER_PAGE)
  }, [currentPage, getFilteredTasks])

  const deletedCount = useMemo(
    () => tasks.filter((task: { deleted: boolean }) => task.deleted).length,
    [tasks],
  )

  return (
    <div className="container mx-auto p-4">
      <Header
        addTask={() => handleOpenModal(null)}
        uncompletedCount={
          tasks.filter(
            (t: { completed: boolean; deleted: boolean }) =>
              !t.completed && !t.deleted,
          ).length
        }
        completedCount={
          tasks.filter((t: { completed: boolean }) => t.completed).length
        }
        deletedCount={deletedCount}
      />
      <TaskList
        tasks={currentTasks}
        toggleCompletion={toggleTaskCompletion}
        deleteTask={deleteTask}
        editTask={handleOpenModal}
      />
      <TaskModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        initialTaskText={currentTask?.text || ''}
        onSave={handleSaveTask}
        isEditing={!!currentTask}
      />
      <CustomPagination
        current={currentPage - 1}
        totalPages={Math.ceil(getFilteredTasks.length / TASKS_PER_PAGE)}
        onPrev={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        onNext={() =>
          setCurrentPage((prev) =>
            prev < Math.ceil(getFilteredTasks.length / TASKS_PER_PAGE)
              ? prev + 1
              : prev,
          )
        }
      />
    </div>
  )
}

export default TaskPage
