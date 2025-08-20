import {createSlice} from "@reduxjs/toolkit"
export const inputSlice = createSlice({
    name:"input",
    initialState:{
        volume: "",
        ratio:"",
        slump:"",
        aggregate:""
    },
    reducers:{
        addVolume: (state,action)=>{
          state.volume = action.payload;
        },
         addRatio: (state,action)=>{
            state.ratio = action.payload;
        },
         addSlump: (state,action)=>{
            state.slump = action.payload;
        },
         addAggregate: (state,action)=>{
            state.aggregate= action.payload;
        },
      
    }
});
export const inputActions = inputSlice.actions;