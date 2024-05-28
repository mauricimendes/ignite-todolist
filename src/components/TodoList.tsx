import { Empty } from './Empty'
import { Task } from './Task'
import styles from './TodoList.module.css'

export interface TaskType {
  id: number
  content: string
  checked: boolean
}

interface TaskList {
  tasks: TaskType[]
  onCheckTask: (id: number) => void
  onDeleteTask: (id: number) => void
}

export function TodoList({ tasks, onCheckTask, onDeleteTask }: TaskList) {
  const createdTasks = tasks.length
  const concludedTasks = createdTasks === 0 ? createdTasks : `${tasks.filter(task => task.checked).length} de ${createdTasks}`

  function handleCheckedTask(id: number) {
    onCheckTask(id)
  }

  function handleDeleteTask(id: number) {
    onDeleteTask(id)
  }

  return (
    <article className={styles.todolist}>
      <header className={styles.header}>
        <section>
          <strong className={styles.criated}>Tarefas criadas</strong>

          <span>{createdTasks}</span>
        </section>

        <section>
          <strong>Concluídas</strong>

          <span>{concludedTasks}</span>
        </section>
      </header>

      <main>
        {tasks.length === 0 ? <Empty /> :
          tasks.map(task => (
            <Task
              key={task.id}
              content={task.content}
              checked={task.checked}
              onCheckTask={() => handleCheckedTask(task.id)}
              onDeleteTask={() => handleDeleteTask(task.id)}
            />
          ))
        }
      </main>
    </article>
  )
}