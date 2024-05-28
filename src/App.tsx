import { Header } from './components/Header'

import { Form } from './components/Form'
import { TodoList } from './components/TodoList'

import './global.css'
import styles from './App.module.css'

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Form />

        <TodoList />
      </div>
    </div>
  )
}

export default App
