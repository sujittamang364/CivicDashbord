import React from 'react'
import styles from '../styles/sectionheader.module.css'

const SectionHeader = ({ title, Icon, variant, button }) => {
  return (
    <div className={styles.container}>
      
      <div className={styles.row}>
        {Icon && <Icon className={styles.icon} />}
        <p className={`${styles.SectionHeader} ${styles[variant]}`}>
          {title}
        </p>
      </div>

      {button}

    </div>
  )
}

export default SectionHeader