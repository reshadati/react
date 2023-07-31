import React from 'react'
import styles from '../modal.module.css'

export const Confirim = ({children}) => {
  return (
    <div className={styles['back-modal-hazf']}>
    <div className={styles['modal-hazf']}>
     {children}
     </div>
    </div>
  )
}
