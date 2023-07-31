import React, { Fragment} from 'react'
import styles from '../layout.module.css'


export const Aside = ({categories,onChangeCategory}) => {
// const categoryRef=useRef();
 
  return (
    <div className={styles['aside']}>  
      دسته بندی کالا ها 
    <ul>
    {categories.map((category)=> (
      <Fragment key={category}>
         {/* <label htmlFor='category'>{category}</label>
         <input type={'checkbox'} ref={categoryRef}
          onChange={onChangeCategory.bind(this,category)}
           id='category'></input> */}
        <li onClick={onChangeCategory.bind(this,category)} >{category}</li>
        </Fragment>        
    ) )      
    }
   </ul>
    </div>
  )
}
