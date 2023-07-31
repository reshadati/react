import React from 'react'
import styles from './modal.module.css'

export const TitleModal = ({children}) => {
  return (
    <div className={styles['title']}>
    {children}
    </div>
  )
}
