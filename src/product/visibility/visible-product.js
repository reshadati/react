import  { useEffect, useState } from 'react'
import styles from '../product.module.css'
import { useNavigate } from 'react-router-dom';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  addBy} from "../../store-redux/slice";


 export const VisibleProduct = ({product}) => {
    const[data,setData]=useState([]);
   const  navigate=useNavigate();
   const  productSelector=useSelector((store) => store.product);
   const dispatch = useDispatch();
    console.log(productSelector)
    // useEffect(()=>{
    //     console.log(data)
    // },[data]);
    
    useEffect(()=> {
    setData(product)
    },[product]);

    const onCloseHandler=()=>{
    navigate(-1)
    }

  
  return (
    <div className={styles['view']}>
     <div ><img src={product.image} alt='' width={'370px'} height={'400px'}/></div>
     <div className={styles['moshakhasat']}>
     <div className={styles['brand']}>{product.title}</div>
     <div className={styles['desc']}>{product.desc}</div>
     </div>
       <button onClick={onCloseHandler} className={styles['close']}>
        <span className="material-symbols-outlined">close</span>
        </button>
<div className={styles['gheimat']}>{product.price}هزار تومان</div>
<button className={styles['add-sabad']}
 onClick={() => {
  dispatch(addBy(data))}}>افزودن به سبد خرید</button>
    </div>
  )
}
