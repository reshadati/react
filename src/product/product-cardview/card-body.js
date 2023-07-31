import React from 'react'
import styles from '../product.module.css'

export const CardBody = ({children}) => {
  return (
    <div className={styles['card-body']}>
{children}
    </div>
  )
}
