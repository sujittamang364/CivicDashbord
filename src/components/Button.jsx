import React from 'react'
import styles from "../styles/button.module.css"


const Button = ({text,onClick,Icon,variant}) => {
  return (
    <button onClick={onClick} className={`${styles.button} ${styles[variant]}`} >
        {Icon && <Icon className={styles.Icon}/>}{text}
    </button>
  )
}


export default Button
