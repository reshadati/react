import React, { useEffect, useState } from 'react'
import styles from '../product.module.css'
import { Fragment } from 'react'
import { CardBody } from './card-body'
import { CardColumn } from './card-column'
import { Modal} from '../../component/modal'
import {TitleModal} from '../../component/modal/title-modal'
import {BodyModal} from '../../component/modal/body-modal'
import { VisibleBtn } from '../visibility/visible-btn'
import { Link } from 'react-router-dom'

export const CardView = ({products}) => {
  // const [isModal,setIsModal]=useState(false);

  // const onShowModalHandler=()=>{
  //  setIsModal(true);
  // }
  // const onCloseHandler=()=>{
  //   setIsModal(false)
  // }
 
  return (

  <div className={styles['card-view']}>
 
    {products.map ((product ) => (
       <Fragment key={product.id}>
        <Link to={ `edit/${product.id}`} className={styles['link']}>
        <CardBody >
        <CardColumn><img src={product.image} alt='' width={'180px'} height={'200px'}/> </CardColumn> 
        <div className={styles['title']}><CardColumn>{product.title}</CardColumn> </div>
        <div className={styles['desc']}><CardColumn>{product.desc}</CardColumn> </div>
        <div className={styles['price']}><CardColumn>{product.price} t</CardColumn> </div>
        </CardBody>
         </Link>
        
         {/* {isModal &&
         <Modal>
          <TitleModal>
          <button onClick={onCloseHandler}>
          <span className="material-symbols-outlined">close</span>
          </button>
          </TitleModal> 
          <BodyModal>
      
          </BodyModal> 
        </Modal> } */}
       </Fragment>
     ))}
 </div>

  )
}
