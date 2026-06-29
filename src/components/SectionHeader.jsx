import React from 'react'
import styles from '../styles/sectionheader.module.css'

const SectionHeader = ({ title, Icon, variant, button,reportbtn }) => {
  return (
    <div className={styles.container}>
      
      <div className={styles.row}>
        {Icon && <Icon className={styles.icon} />}
        <p className={`${styles.SectionHeader} ${styles[variant]}`}>
          {title}
        </p>
      </div>
      <div className={styles.btn}>
       {button}
       {reportbtn}
      </div>
    </div>
  )
}

export default SectionHeader