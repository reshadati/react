import React from 'react'
import { BasePage } from '../../component/base-page'
import { UserForm } from './user-form'
import axios from 'axios'
import {  useNavigate } from 'react-router-dom'

 export const NewUserPage = () => {
 const navigate= useNavigate();
 
 const defultUser ={
    firstname:"",
    text :"",
   
  }
  const onNewUserHandler =(user)=>{
    console.log( 'new usrer',user)
    axios.post('http://localhost:3001/comment', user)
    .then(response => {
        console.log(response)
        navigate(-1)
    })
}
  
  return (

   <BasePage>
   <UserForm  user={defultUser} onSave={onNewUserHandler} />
   </BasePage>
   
  )
}