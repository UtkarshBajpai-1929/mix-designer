import { createSlice } from "@reduxjs/toolkit";

export const calculatedSlice = createSlice({
  name: "calculation",
  initialState: {
    water_content: "",
    cement_req: "",
    fine_a: "",
    coarse_a: "",
    rat: "",
    bag:""
  },
  reducers:{
    addWater: (state,action)=>{
      state.water_content = action.payload;
    },
      addCement: (state,action)=>{
      state.cement_req = action.payload;
    },
      addFine: (state,action)=>{
      state.fine_a = action.payload;
    },
      addCoarse: (state,action)=>{
      state.coarse_a = action.payload;
    },
    addRat:(state,action)=>{
      state.rat = action.payload;
    },
    addBag:(state,action)=>{
      state.bag = action.payload;
    }
  }
});
export const calculatedActions = calculatedSlice.actions;