import { PlusCircle } from 'phosphor-react'
import styles from './Form.module.css'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

interface FormProps {
  onCreateNewTask: (content: string) => void
}

export function Form({ onCreateNewTask }: FormProps) {
  const [newTaskContent, setNewTaskContent] = useState<string>('')

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    onCreateNewTask(newTaskContent)
    setNewTaskContent('')
  }

  function handleNewTaskContentInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  function handleNewTaskContent(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setNewTaskContent(event.target.value)
  }

  return (
    <form className={styles.form} onSubmit={handleCreateNewTask}>
      <input
        name='newTaskContent'
        placeholder='Adicione uma nova tarefa'
        value={newTaskContent}
        onChange={handleNewTaskContent}
        onInvalid={handleNewTaskContentInvalid}
        required
      />
      <button type='submit' disabled={newTaskContent.length === 0}>
        Criar
        <PlusCircle size={16} />
      </button>
    </form>
  )
}