import React from 'react'
import styles from '../product.module.css'
import { Fragment } from 'react'
import { CardBody } from './card-body-dark'
import { CardColumn } from './card-column'
import { Link } from 'react-router-dom'

export const CardViewDark = ({products}) => {
  
  return (

  <div className={styles['card-view']}>
 
    {products.map ((product ) => (
       <Fragment key={product.id}>
        <Link to={ `edit/${product.id}`} className={styles['link']}>
        <CardBody>
        <CardColumn><img src={product.image} alt='' width={'180px'} height={'200px'}/></CardColumn> 
        <div className={styles['title']}><CardColumn>{product.title}</CardColumn> </div>
        <div className={styles['desc']}><CardColumn>{product.desc}</CardColumn> </div>
        <div className={styles['price']}><CardColumn>{product.price} t</CardColumn> </div>
        </CardBody>
        </Link>
       </Fragment>
     ))}
 </div>

  )
}
