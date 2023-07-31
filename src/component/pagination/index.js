import React from 'react'
import styles from '../component.module.css'
import { useState } from 'react'
import { useEffect } from 'react'

export const Pagination = ({pageSize, totlaItems, activePage,onPageChange}) => {

 const totalPage = Math.ceil(totlaItems / pageSize);
 const buttons=[];
 const [currentPage, setCurrentPage] = useState(activePage);

  const onPageChangeHandler = (pageNo) =>{
        setCurrentPage(pageNo)
    }
    const onLastHandler = () =>{
        setCurrentPage(currentPage - 1)
    }
    const onNextHandler = () =>{
        setCurrentPage(currentPage + 1)
    }

    useEffect(()=>{
        if(onPageChange && typeof onPageChange === 'function')
        {
            onPageChange(currentPage)
        }
    }, [currentPage, onPageChange]) 

    buttons.push(<button key={'last'} onClick={onLastHandler} disabled={currentPage === 1}>
    <span className="material-symbols-outlined">arrow_back_ios</span>
    </button>)
    for(let i = 1; i <= totalPage; i++){
        buttons.push(<button key={i} onClick={onPageChangeHandler.bind(this, i)}
         className={currentPage === i ? styles['active']: ''}>{i}</button>)
    }
    buttons.push(<button key={'next'} onClick={onNextHandler} disabled={currentPage === totalPage}>
    <span className="material-symbols-outlined">arrow_forward_ios</span>
    </button>)
   

  
  return (
    <div className={styles['pagination']}>
    {buttons}
    </div>
  )
}
