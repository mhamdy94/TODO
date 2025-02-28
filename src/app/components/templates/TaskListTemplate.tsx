'use client'
import React, { useState, useCallback, useMemo } from 'react'
import useStore from '@/store/store'
import Header from '@/app/components/organisms/Header'
import TaskList from '@/app/components/organisms/TaskList'
import TaskModal from '@/app/components/molecules/TaskModal'
import CustomPagination from '@/app/components/molecules/Pagination'

const TaskPage = () => {
  const tasks = useStore(
    (state: {
      todos: {
        id: string
        text: string
        completed: boolean
        deleted: boolean
      }[]
    }) => state.todos,
  )
  const addTask = useStore(
    (state: {
      addTask: (task: {
        id: string
        text: string
        completed: boolean
        deleted: boolean
      }) => void
    }) => state.addTask,
  )
  const updateTask = useStore(
    (state: { updateTask: (task: { id: string; text: string }) => void }) =>
      state.updateTask,
  )
  const deleteTask = useStore(
    (state: { deleteTask: (id: string) => void }) => state.deleteTask,
  )
  const toggleTaskCompletion = useStore(
    (state: { toggleTaskCompletion: (id: string) => void }) =>
      state.toggleTaskCompletion,
  )

  const [isModalOpen, setModalOpen] = useState(false)
  const [taskText, setTaskText] = useState('')
  const [editingTask, setEditingTask] = useState<{
    id: string
    text: string
  } | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const tasksPerPage = 3

  const handleAddTask = useCallback(() => {
    setEditingTask(null)
    setTaskText('')
    setModalOpen(true)
  }, [])

  const handleSaveTask = useCallback(() => {
    if (editingTask) {
      updateTask({ ...editingTask, text: taskText })
      setEditingTask(null)
    } else {
      addTask({
        id: Date.now().toString(),
        text: taskText,
        completed: false,
        deleted: false,
      })
      setTaskText('') // Reset taskText after adding a new task
    }
    setModalOpen(false)
  }, [editingTask, taskText, addTask, updateTask])

  const handleToggleCompletion = useCallback(
    (id: string) => {
      toggleTaskCompletion(id)
    },
    [toggleTaskCompletion],
  )

  const handleDeleteTask = useCallback(
    (id: string) => {
      deleteTask(id)
    },
    [deleteTask],
  )

  const handleEditTask = useCallback((task: { id: string; text: string }) => {
    setEditingTask(task)
    setTaskText(task.text)
    setModalOpen(true)
  }, [])

  const handlePrevPage = useCallback(() => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }, [currentPage])

  const handleNextPage = useCallback(() => {
    if (currentPage < Math.ceil(tasks.length / tasksPerPage)) {
      setCurrentPage(currentPage + 1)
    }
  }, [currentPage, tasks.length])

  const currentTasks = useMemo(() => {
    const indexOfLastTask = currentPage * tasksPerPage
    const indexOfFirstTask = indexOfLastTask - tasksPerPage
    return tasks
      .filter(
        (task: {
          id: string
          text: string
          completed: boolean
          deleted: boolean
        }) => !task.deleted,
      )
      .slice(indexOfFirstTask, indexOfLastTask)
  }, [currentPage, tasks, tasksPerPage])

  const deletedCount = useMemo(() => {
    return tasks.filter(
      (task: {
        id: string
        text: string
        completed: boolean
        deleted: boolean
      }) => task.deleted,
    ).length
  }, [tasks])

  return (
    <div className="container mx-auto p-4">
      <Header
        addTask={handleAddTask}
        uncompletedCount={
          tasks.filter(
            (t: {
              id: string
              text: string
              completed: boolean
              deleted: boolean
            }) => !t.completed && !t.deleted,
          ).length
        }
        completedCount={
          tasks.filter(
            (t: {
              id: string
              text: string
              completed: boolean
              deleted: boolean
            }) => t.completed,
          ).length
        }
        deletedCount={deletedCount}
      />
      <TaskList
        tasks={currentTasks}
        toggleCompletion={handleToggleCompletion}
        deleteTask={handleDeleteTask}
        editTask={(task) => handleEditTask(task)}
      />
      <TaskModal
        isOpen={isModalOpen}
        onClose={() => {
          setModalOpen(false)
          setTaskText('')
        }}
        taskText={taskText}
        setTaskText={setTaskText}
        onSave={handleSaveTask}
        isEditing={!!editingTask}
      />
      <CustomPagination
        current={currentPage - 1}
        totalPages={Math.ceil(tasks.length / tasksPerPage)}
        onPrev={handlePrevPage}
        onNext={handleNextPage}
      />
    </div>
  )
}

export default TaskPage
