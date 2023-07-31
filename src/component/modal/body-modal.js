import React from 'react'
import styles from './modal.module.css'

export const BodyModal = ({children}) => {
  return (
    <div className={styles['body']}>
    {children}
        </div>
  )
}
