import React from 'react'
import styles from '../layout.module.css'
import { Container } from '../../component/container'

export const Row = ({children}) => {
  return (
    <Container className={styles['row']}>
    {children}
    </Container>
  )
}
