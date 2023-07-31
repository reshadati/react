import React from 'react'
import styles from './modal.module.css'

export const Modal = ({children}) => {
  return (
    <div className={styles['back-modal']}>
    <div className={styles['modal']}>
     {children}
     </div>
    </div>
  )
}
