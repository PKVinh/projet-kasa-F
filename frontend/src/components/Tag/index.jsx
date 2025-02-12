import styles from "./Tag.module.css"

function Tag({text}) {
    return (
      <span className={styles.tag}><p>{text}</p></span>
    )
  }
  
export default Tag