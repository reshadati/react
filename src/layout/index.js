import React from 'react'
import { Header } from './header'
import styles from './layout.module.css'
import { Footer } from './footer'
import { Row } from './main/row'
import {Helmet } from  'react-helmet-async'

export const MainLayout = ({children}) => {
  return (
    <>
   <Helmet>
    <title>mode and fashion</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
   </Helmet>
   <Header/>
   <Row>
    <main className={styles['main']} >
      {children}
    </main> 
   </Row>
   <Footer/>
    </>
  )
}
