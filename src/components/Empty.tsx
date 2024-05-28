import styles from './Empty.module.css'
import clipboard from '../assets/clipboard.svg'

export function Empty() {
  return (
    <div className={styles.empty}>
      <img src={clipboard} alt="Icone para sessão vazia" />

      <div>
        <strong>Você ainda não tem tareas cadastradas</strong>

        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  )
}