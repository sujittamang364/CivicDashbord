import React from 'react'
import styles from '../styles/stausbadge.module.css'

const StatusBadge = (status) => {
  return (
    <span className={`${styles.badge} ${styles[status.toLowerCase()]}`}
    >{status}</span>
      
    
  )
}

export default StatusBadge
