import todolistLogo from '../assets/todolist-logo.svg'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={todolistLogo} alt="Logotipo do Todo List" />
    </header>
  )
}