import {createSlice} from '@reduxjs/toolkit'

const initialState ={
   value :  [] ,
}
 const productSlice =createSlice({
 name : "product",
 initialState ,
 reducers :{
  addBy: (state, {payload}) => {
    const isExit = state.value.filter(item => item.id === payload.id);
    if(isExit?.length > 0)
    return alert("قبلا به سبد خرید اضافه شده است.");
      state.value.push(payload);
       },
   deleteBy : (state, {payload}) => {
  
    state.value = state.value.filter(item => item.id !== payload);
   // state.value.pop(payload)
       },
 },
});
export default productSlice.reducer
export const {addBy , deleteBy} =productSlice.actions;
