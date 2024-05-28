import { Check, Trash } from "phosphor-react";
import styles from './Task.module.css'

interface TaskProps {
  content: string
  checked: boolean
  onCheckTask: () => void
  onDeleteTask: () => void
}

export function Task({ checked, content, onCheckTask, onDeleteTask }: TaskProps) {
  return (
    <div className={styles.task}>
      <span className={checked ? styles.checked : styles.unchecked} onClick={onCheckTask}>
        <Check size={18} />
      </span>

      <p className={checked ? styles.taskPChekced : styles.taskPUnchecked}>{content}</p>

      <button onClick={onDeleteTask}>
        <Trash size={24} />
      </button>
    </div>
  )
}