import React from 'react'
import styles from '../product.module.css'
import image1 from './images/d1.jpg'
import image2 from './images/d2.jpg'
import image3 from './images/d3.jpg'
import image4 from './images/d4.jpg'
import image5 from './images/d5.jpg'
import image6 from './images/d6.jpg'

export const DownPage = ({children}) => {
  return (
    <div className={styles['down-page']}>
        <img src={image1} alt=''  width={'200px'} height={'200px'}/>
        <img src={image2} alt='' width={'200px'} height={'200px'}/>
        <img src={image3} alt='' width={'200px'} height={'200px'}/>
        <img src={image4} alt='' width={'200px'} height={'200px'}/>
        <img src={image5} alt='' width={'200px'} height={'200px'}/>
        <img src={image6} alt='' width={'200px'} height={'200px'}/>
{children}
    </div>
  )
}
