import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { BasePage } from '../../component/base-page';
import { useState } from 'react';
import { VisibleProduct } from './visible-product';

export const EditProduct = () => {
    
    const { id } = useParams();
  
    const [product, setProduct] = useState({});
  

    useEffect(()=>{
      axios.get(`http://localhost:3001/products/${id}`)
      .then((response) => {
        console.log(response)
        setProduct(response.data)
      })
     },[id]);

  return (
    <BasePage>
  <VisibleProduct product={product}/>
    </BasePage>
  )
}
