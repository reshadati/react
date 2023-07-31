import React, { useEffect, useRef, useState } from 'react'
import styles from '../../component/component.module.css'
import { useNavigate } from 'react-router-dom';
import { Confirim } from '../../component/modal/modal-hazf';


export const UserForm = ({user, onSave}) => {
    const navigate = useNavigate();
    const firstnameRef=useRef(); 
   const [modal,setModal]=useState(false);
  //  const [errors,setErrors]=useState({});

    const [data,setdata]=useState({ 
        firstname:"",
        text :"",
    } )
 const onModalClose=()=>{
  setModal(false)
 }
 
    const onSubmitHandler = (e) => {
      e.preventDefault();
      // if (formValid()){
      // setErrors('');
      // setdata('')
    
      // }
    
         onSave(data);
        setModal(true);
        navigate('/new')
      
      
    };
//     const formValid=()=>{
//   const errors={};
//   if(!data.firstname){
//    alert ("name is required")
  
//   }
//   if(!data.text){
//  alert ("text is required") 
 
//   }
//   setErrors({...errors,errors});
//   return !(errors)
// }
 
  const onChangeHandler = (e) => {
   setdata({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

    useEffect(() => {
      console.log(data);
    }, [data]);
    
    useEffect(() => {
      setdata(user)
    }, [user]);

    const oncancelHandler=()=>{
      navigate('/new')
  }
  
  return (
<div>
    <form className={styles["form-wrapper"]} onSubmit={onSubmitHandler}>
    <label htmlFor="first-name">Name</label>
    <input
      type="text"
      id="first-name"
      name="firstname"
    value={data.firstname}
    onChange={onChangeHandler}
    ref={firstnameRef}
    />
  

    <label htmlFor="txt">Comment</label>
    <textarea
      type="text"
      id="txt"
      name="text"
     value={data.text}
     onChange={onChangeHandler}
     rows={'5'}
    />
  
    <div className={styles["form-footer"]}>
      <button
        type="button"
        className={styles["button"]}
        onClick={oncancelHandler}
      >
        Cancel
      </button>
      <button
        type="submit"
        className={styles["button"] }
       
      >
        Save
      </button>
    </div>
  </form>
{modal && 
<Confirim>
<div className={styles['confirim-title']}>
  ثبت اطلاعات
         <button onClick={onModalClose} className={styles['close']}>
          <span className="material-symbols-outlined">close</span>
          </button>
            </div>
          <div className={styles['confirim-body']}>اطلاعات در قسمت کامنت در سرور جی سان ثبت شد</div>
</Confirim>

  }
</div> 
 )
}
