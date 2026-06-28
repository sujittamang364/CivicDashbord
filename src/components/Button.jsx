import React from 'react'
import styles from "../styles/button.module.css"


const Button = ({text,onClick,Icon}) => {
  return (
    <button onClick={onClick} className={styles.button} >
        {Icon && <Icon className={styles.Icon}/>}{text}
    </button>
  )
}


export default Button
