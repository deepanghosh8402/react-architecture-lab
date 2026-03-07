import { createSlice } from "@reduxjs/toolkit";
import { SetHundred } from "./CounterAction";

const initialState={
    value:0
}
const CounterSlice=createSlice({
    name:'counter',
    initialState,
    reducers:{
        
        increment:(state)=>{
            state.value=state.value+1
        },
        decrement:(state)=>{
            state.value=state.value-1
        },
        reset:(state)=>{
            state.value=0
        },
    },
    extraReducers:(builder)=>{    
        builder.addCase(SetHundred,(state)=>{
            state.value=100
        })        
    }    
})

export const {increment,decrement,reset,logout } = CounterSlice.actions
export default CounterSlice.reducer