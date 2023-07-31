import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './sabad.module.css'
import { Confirim}  from '../../component/modal/modal-hazf'
import { deleteBy } from '../../store-redux/slice'
import { useState } from 'react'

 export const Sabad = () => {
  const {value:productState}  = useSelector((store) => store.product);
  // console.log(productState)
  const [isModal,setIsModal]=useState(false);
  const [data,setData]=useState();
  const dispatch = useDispatch();

  const onModalSHow =(id)=>{
    // console.log(id)
     setIsModal(true)
     setData(id)
  }
  
  const onModalClose =()=>{
    setIsModal(false)
  }
 const onDeleteHandler=()=>{
  // console.log(data)
 dispatch(deleteBy(data));
  setIsModal(false)
 }
  return (
    <div className={styles['sabad-kharid']} arr="test">
    {
       productState.map ((product,index) => (
       <div key={index} 
       className={styles['sabad']} 
       data ={product.id}
       index={index}
       >
        <div><img src={product.image} alt='' width={'180px'} height={'200px'}/> </div> 
        <div className={styles['title']}>{product.title} </div>
        <div>{product.desc} </div>
        <div className={styles['price']}> {product.price} تومان</div>
          <button onClick={()=> onModalSHow(product.id)} className={styles['close']}>
        <span className="material-symbols-outlined">close</span>
        </button>
        </div>))}
      
        {isModal &&  
         ( <Confirim>
          <div className={styles['title-modal']}>
            حذف کالا
         <button onClick={onModalClose} className={styles['close']}>
          <span className="material-symbols-outlined">close</span>
          </button>
          </div>
          <div className={styles['body-modal']}>آیا از حذف این کالا مطمئن هستید ؟</div>
          <div className={styles['footer']}> 
          <button 
          onClick={onDeleteHandler } 
          className={styles['button1']}>حذف</button>
          <button
           className={styles['button2']}
          onClick={onModalClose}>انصراف</button>
          </div>
          </Confirim>)
          }
    
    </div>
  )
}


