import {createSlice} from "@reduxjs/toolkit"
export const inputSlice = createSlice({
    name:"input",
    initialState:{
        volume: "",
        ratio:"",
        slump:"",
        aggregate:"",
        adm:"",
        sand_zone:"",
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
        addAdm:(state,action)=>{
            state.adm = action.payload;
        },
        addSand:(state,action)=>{
            state.sand_zone =action.payload;
        }
      
    }
});
export const inputActions = inputSlice.actions;