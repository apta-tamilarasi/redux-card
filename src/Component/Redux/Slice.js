import { createSlice } from "@reduxjs/toolkit";
import data from "../../product.json"

const Slice=
createSlice({
    name:"add to card",

    initialState:{
        arr:data,
        name:''
    },
        

    reducers:{
     handlearr:(state,action)=>{
            console.log(state,action)
            state.arr.data=action.payload
        },
    handlename:(state,action)=>{
            console.log(state,action)
            state.name=action.payload
        }


    }
})

export default Slice.reducer
export const {handlearr,handlename}=Slice.actions
