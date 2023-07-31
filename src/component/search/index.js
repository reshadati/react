import React, { Fragment } from 'react'
import axios from 'axios';
import styles from '../component.module.css'
import { useState } from 'react';
import {CardView } from '../../product/product-cardview/card-view'
import { Modal } from '../modal';
import {TitleModal} from '../modal/title-modal'
import {BodyModal} from '../modal/body-modal'

export const Search = () => {
  const [dataSearch,setDataSearch]=useState([]);
  const [ismodalSearch,setisModalSearch]=useState(false);
   
  const onShowModalHandler=()=>{
    setisModalSearch(true)
  }
  const onCloseHandler=()=>{
    setisModalSearch(false)
  }

  const onChangeHandler =(e) =>{
  console.log(e.target.value)
  const query =e.target.value;
   if(query.length > 0){
   axios.get(`http://localhost:3001/products?q=${query}`)
  .then((response)=>{
    console.log(response.data["length"])
    setDataSearch(response.data)
    if((response.data["length"]) === 0){ alert("موردی یافت نشد")}
  })
} else (setDataSearch([]))

}

  return (
    <Fragment>
     <div className={styles['search-bar']}>
     <span className={"material-symbols-outlined"}>search</span>
     <input type='text' name='search' className={styles['search']}
      placeholder='جستجو' onClick={onShowModalHandler} />
       </div>
      {ismodalSearch && 
      <Modal>
       <TitleModal>
       <div className={styles['search-bar2']}>
      <span className={"material-symbols-outlined"}>search</span>
      <input type='text' name='search' className={styles['search2']}
        placeholder='جستجو' onKeyUp={onChangeHandler} />
        <button onClick={onCloseHandler}>
        <span className="material-symbols-outlined">close</span>
        </button>
        </div>
       </TitleModal>
        <BodyModal >
        <CardView products={dataSearch}/>
       </BodyModal>
      </Modal>}
    </Fragment>
    
    
  )
}
