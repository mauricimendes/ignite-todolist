import { useState } from 'react'
import { Header } from './components/Header'

import { Form } from './components/Form'
import { TodoList, TaskType } from './components/TodoList'

import './global.css'
import styles from './App.module.css'


function App() {
  const [tasks, setTasks] = useState<TaskType[]>([])

  function createNewTask(content: string) {
    const lastIdTask = tasks.length === 0 ? 0 : tasks[tasks.length - 1].id

    setTasks(state => [...state, {
      id: lastIdTask + 1,
      content,
      checked: false
    }])
  }

  function checkedTask(checkTaskId: number) {
    const tasksListWitchTaskChecked = tasks.map(task => {
      if (task.id === checkTaskId) {
        task.checked = !task.checked
      }

      return task
    })

    setTasks(tasksListWitchTaskChecked)
  }

  function deleteTask(deleteTaskId: number) {
    const tasksWithoutDeletedTaskId = tasks.filter(task => task.id !== deleteTaskId)
    setTasks(tasksWithoutDeletedTaskId)
  }

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Form onCreateNewTask={createNewTask} />

        <TodoList tasks={tasks} onCheckTask={checkedTask} onDeleteTask={deleteTask} />
      </div>
    </div>
  )
}

export default App
