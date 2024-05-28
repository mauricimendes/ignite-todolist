import { Empty } from './Empty'
import { Task } from './Task'
import styles from './TodoList.module.css'

export function TodoList() {
  return (
    <article className={styles.todolist}>
      <header className={styles.header}>
        <section>
          <strong className={styles.criated}>Tarefas criadas</strong>

          <span>0</span>
        </section>

        <section>
          <strong>Concluídas</strong>

          <span>2 de 5</span>
        </section>
      </header>

      <main>
        {/* <Empty /> */}


        <Task />
        <Task />
        <Task />
        <Task />
      </main>
    </article>
  )
}