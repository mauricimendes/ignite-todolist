import { Check, Trash } from "phosphor-react";
import styles from './Task.module.css'

export function Task() {
  return (
    <div className={styles.task}>
      <span className={styles.checked}>
        <Check size={18} />
      </span>

      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque expedita delectus quo quia, iste dolore unde nam vel. Molestiae pariatur eveniet modi temporibus voluptatum iste at aut soluta amet earum!</p>

      <button>
        <Trash size={24} />
      </button>
    </div>
  )
}