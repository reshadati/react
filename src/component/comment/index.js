import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../component.module.css'

export const CommentPage = () => {
  return (
    <div className={styles['comment']}>
        <Link to={"new"}>ورود/ ثبت  نظر کاربر</Link>
    </div>
  )
}
