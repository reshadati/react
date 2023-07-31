import React, { useEffect } from 'react'
import { useState } from 'react';
import { BasePage } from '../component/base-page';
import axios from 'axios';
import { CardView } from './product-cardview/card-view';
import { Loading } from '../component/loading';
import { Pagination } from '../component/pagination';
import * as viewModeconstracts from './mode-veiw/constracts'
import { CardViewDark } from './product-cardview/cardview-dark';
import styles from './product.module.css';
import { Aside } from '../layout/aside';
import { DownPage } from './down-page';



   export const ProductPage = () => {
    const [productList,setProductList]=useState([]);
    const [viewMode,setViewMode]=useState(viewModeconstracts.LIGHT_VIEW);
    const [isloading, setisloading]=useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalItems, setTotalItems] = useState(1);
    const [categories,setCategories]=useState([]);
    const pageSize=3;
     
    const onShowHandler=()=>{
      setViewMode( !viewMode ? viewModeconstracts.DARK_VIEW : viewModeconstracts.LIGHT_VIEW) 
    }

    useEffect(()=>{ 
     axios.get(`http://localhost:3001/products?_page=${currentPage}&_limit=${pageSize}`)
     .then((response)=>{
        setProductList(response.data)
        setTotalItems(parseInt(response.headers["x-total-count"]))
        setisloading(false)
     })
    },[currentPage])

    const onPageChangeHandler = (pageNo) => {
        if (pageNo !== currentPage) {
          // console.log(pageNo);
          setisloading(true);
          setCurrentPage(pageNo);
         
        }
      };

      useEffect(()=>{
        axios.get(`http://localhost:3001/categories`)
        .then((response)=>{ 
        setCategories(response.data)
        // console.log(response.data)
      }
        )},[] );

        const getCategoryHandler=(category)=>{
          axios.get(`http://localhost:3001/products?category_like=${category}`)
          .then((result)=>{
            // console.log(result.data);
             setProductList(result.data)
            setTotalItems(parseInt(result.headers["x-total-count"]))
            setisloading(false)
          })
        }
      

return(
 <BasePage>
    {isloading && <Loading/>}
    <Pagination  
        pageSize={pageSize}
        totlaItems={totalItems}
        activePage={currentPage}
        onPageChange={onPageChangeHandler}/>
      <div className={styles['display']}>
      <button onClick={onShowHandler} className={styles['button']}>
      {viewMode === viewModeconstracts.LIGHT_VIEW ? 
     ( <span className="material-symbols-outlined">light_mode</span>) :
     (<span className="material-symbols-outlined">dark_mode</span>)
      }
      </button>
        {viewMode === viewModeconstracts.LIGHT_VIEW ? (
         <CardView products={productList}/>
         ) : (
          <CardViewDark  products={productList}/>
         )
        }  
     <Aside 
      categories={categories}
      onChangeCategory={getCategoryHandler}/> 
    </div>
   <DownPage/>
</BasePage>
)
  
}
