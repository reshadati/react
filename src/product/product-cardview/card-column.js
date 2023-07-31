import React from 'react'
import styles from '../product.module.css'

export const CardColumn = ({children}) => {
  return (
    <div className={styles['columns']}>
{children}
    </div>
  )
}
