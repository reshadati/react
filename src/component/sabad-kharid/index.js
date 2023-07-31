import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../component.module.css'
import { useSelector } from 'react-redux'

export const SabadKHarid = () => {
  const productState = useSelector((store) => store.product.value);
  console.log(productState)
  return (
    <div className={styles['sabad']}>
        <Link to={"sabad"}>
          <img src={'/images/sabad.png'} alt="" width={'50px'} height={'40px'}/>
            {/* <span className="material-symbols-outlined">shopping_cart</span> */}
            {productState.length > 0 &&
            <span className={styles['sabad-count']}>{productState.length}</span>
            }
        </Link>
    </div>
  )
}
